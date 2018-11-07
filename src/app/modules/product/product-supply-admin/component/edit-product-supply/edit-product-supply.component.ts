import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductSupply, ProductBase } from '@Core/models';
import { ProductSupplyStateService } from '@Core/modules/product-supply-core/services';
import { ProductBaseStateService } from '@Core/modules/product-base-core/services';

@Component({
    selector: 'app-edit-product-supply',
    templateUrl: './edit-product-supply.html',
    styleUrls: ['./edit-product-supply.scss']
})
export class EditProductSupplyComponent implements OnInit {
    public productSupply$: Observable<ProductSupply>;
    public productBases$: Observable<ProductBase[]>;
    public editedProductSupply: ProductSupply;
    public productSupplyForm: FormGroup;
    public buttonAction = 'Create';

    constructor(
        private formBuilder: FormBuilder,
        private productBaseStateService: ProductBaseStateService,
        private productSupplyStateService: ProductSupplyStateService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.productBases$ = this.productBaseStateService.getProductBaseList();

        this.productSupplyForm = this.formBuilder.group(
            {
                deliveryDate: [''],
                estimatedDeliveryDays: [''],
                orderDate: ['', Validators.required],
                orderId: ['', Validators.required],
                price: ['', Validators.required],
                product: ['', Validators.required],
                quantity: ['', Validators.required],
                shippingCost: ['', Validators.required],
                supplier: ['', Validators.required],
                uid: [''],
                webShop: ['', Validators.required]
            }
        );

        this.productSupply$ = this.activatedRoute.paramMap
            .pipe(
                switchMap((params: ParamMap) => {
                    const uid = params.get('uid');

                    if (uid !== '0') {
                        this.productSupplyStateService.dispatchSelectProductSupplyAction(uid);

                        return this.productSupplyStateService.getProductSupply(uid);
                    } else {
                        return Observable.create();
                    }
                })
            );

        this.productSupply$.subscribe(productSupply => {
            if (productSupply) {
                this.productSupplyForm.patchValue({
                    deliveryDate: productSupply.deliveryDate,
                    estimatedDeliveryDays: productSupply.estimatedDeliveryDays,
                    orderDate: productSupply.orderDate,
                    orderId: productSupply.orderId,
                    price: productSupply.price,
                    product: productSupply.product,
                    quantity: productSupply.quantity,
                    shippingCost: productSupply.shippingCost,
                    supplier: productSupply.supplier,
                    uid: productSupply.uid,
                    webShop: productSupply.webShop
                });

                this.editedProductSupply = productSupply;
                this.buttonAction = 'Update';
            }
        });
    }

    public createProductSupply(productSupplyModel: any) {
        this.productSupplyStateService.dispatchAddAction({ ...productSupplyModel });
    }

    public updateProductSupply(productSupplyModel: any) {
        this.productSupplyStateService.dispatchUpdateAction(productSupplyModel);
    }

    public onSubmit() {
        const productSupplyModel = this.productSupplyForm.value;

        if (this.editedProductSupply) {
            this.updateProductSupply(productSupplyModel);
        } else {
            this.createProductSupply(productSupplyModel);
        }

        this.router.navigate(['../']);
    }

    public uploadedHandler(event: string) {
        this.productSupplyForm.patchValue({
            mainImage: event
        });
    }
}
