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
                product: ['', Validators.required],
                supplier: ['', Validators.required],
                orderId: ['', Validators.required],
                orderDate: ['', Validators.required],
                price: ['', Validators.required],
                estimatedDeliveryDays: [''],
                deliveryDate: [''],
                shippingCost: ['', Validators.required],
                webShop: ['', Validators.required],
                uid: ['']
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
                    product: productSupply.product,
                    supplier: productSupply.supplier,
                    orderId: productSupply.orderId,
                    orderDate: productSupply.orderDate,
                    price: productSupply.price,
                    estimatedDeliveryDays: productSupply.estimatedDeliveryDays,
                    deliveryDate: productSupply.deliveryDate,
                    shippingCost: productSupply.shippingCost,
                    webShop: productSupply.webShop,
                    uid: productSupply.uid
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
