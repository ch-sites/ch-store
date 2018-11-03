import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductBase } from '@Core/models';
import { ProductBaseStateService } from '@Core/modules/product-base-core/services';

@Component({
    selector: 'app-edit-product-base',
    templateUrl: './edit-product-base.html',
    styleUrls: ['./edit-product-base.scss']
})
export class EditProductBaseComponent implements OnInit {
    public productBase$: Observable<ProductBase>;
    public editedProductBase: ProductBase;
    public productBaseForm: FormGroup;
    public buttonAction = 'Create';

    constructor(
        private formBuilder: FormBuilder,
        private productBaseStateService: ProductBaseStateService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.productBaseForm = this.formBuilder.group(
            {
                name: ['', Validators.required],
                category: ['', Validators.required],
                uid: ['']
            }
        );

        this.productBase$ = this.activatedRoute.paramMap
            .pipe(
                switchMap((params: ParamMap) => {
                    const uid = params.get('uid');

                    if (uid !== '0') {
                        this.productBaseStateService.dispatchSelectProductBaseAction(uid);

                        return this.productBaseStateService.getProductBase(uid);
                    } else {
                        return Observable.create();
                    }
                })
            );

        this.productBase$.subscribe(productBase => {
            if (productBase) {
                this.productBaseForm.patchValue({
                    name: productBase.name,
                    category: productBase.category,
                    uid: productBase.uid
                });

                this.editedProductBase = productBase;
                this.buttonAction = 'Update';
            }
        });
    }

    public createProductBase(productBaseModel: any) {
        this.productBaseStateService.dispatchAddAction({ ...productBaseModel });
    }

    public updateProductBase(productBaseModel: any) {
        this.productBaseStateService.dispatchUpdateAction(productBaseModel);
    }

    public onSubmit() {
        const productBaseModel = this.productBaseForm.value;

        if (this.editedProductBase) {
            this.updateProductBase(productBaseModel);
        } else {
            this.createProductBase(productBaseModel);
        }

        this.router.navigate(['../']);
    }
}
