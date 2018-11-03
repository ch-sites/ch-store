import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductBase } from '@Core/models';

@Injectable()
export class ProductBaseDataService {
    private productBaseCollection: AngularFirestoreCollection<ProductBase>;
    private productBases$: Observable<ProductBase[]>;

    /**
     * Creates an instance of ProductBaseService.
     *
     * @param {AngularFirestore} angularFirestore
     * @memberof ProductBaseService
     */
    constructor(private angularFirestore: AngularFirestore) {
        this.productBaseCollection = angularFirestore.collection<ProductBase>('product-base');

        this.productBases$ = this.productBaseCollection.snapshotChanges().pipe(
            map(actions => actions.map(
                action => {
                    const data = action.payload.doc.data() as ProductBase;
                    const id = action.payload.doc.id;

                    if (!data.uid) {
                        data.uid = id;
                    }

                    return {...data};
                })
            )
        );
    }

    /**
     * (description)
     *
     * @param {ProductBase} productBase
     * @memberof ProductBaseDataService
     */
    add(productBase: ProductBase): Observable<ProductBase> {
        this.productBaseCollection.add(productBase);

        return new Observable<ProductBase>(observer => {
            observer.next(productBase);
        });
    }

    /**
     * (description)
     *
     * @param {ProductBase} productBase
     * @memberof ProductBaseService
     */
    delete(productBase: ProductBase): Observable<ProductBase> {
        this.angularFirestore.doc<ProductBase>('product-base/' + productBase.uid);

        return new Observable<ProductBase>(observer => {
            observer.next(productBase);
        });
    }

    /**
     * (description)
     *
     * @param {string} uid
     * @returns {Observable<ProductBase>}
     * @memberof ProductBaseService
     */
    load(uid: string): Observable<ProductBase> {
        return new Observable<ProductBase>(observer => {
            const productBaseDocument =
                this.angularFirestore.doc<ProductBase>('product-base/' + uid);

            productBaseDocument.valueChanges().subscribe(value => {
                if (value) {
                    const productBase: ProductBase = { uid: uid, ...value };

                    observer.next(productBase);
                } else {
                    observer.next(null);
                }

            });
        });
    }

    /**
     * (description)
     *
     * @returns {Observable<ProductBase[]>}
     * @memberof ProductBaseServiceImpl
     */
    list(): Observable<ProductBase[]> {
        return this.productBases$;
    }

    /**
     * (description)
     *
     * @param {ProductBase} productBase
     * @returns {Observable<ProductBase>}
     * @memberof ProductBaseService
     */
    update(productBase: ProductBase): Observable<ProductBase> {
        const productBaseDocument =
            this.angularFirestore.doc<ProductBase>('product-base/' + productBase.uid);

        productBaseDocument.set(productBase, { merge: true });

        return new Observable<ProductBase>(observer => {
            observer.next(productBase);
        });
    }
}
