import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductSupply } from '@Core/models';

@Injectable()
export class ProductSupplyDataService {
    private productSupplyCollection: AngularFirestoreCollection<ProductSupply>;
    private productSupplys$: Observable<ProductSupply[]>;

    /**
     * Creates an instance of ProductSupplyService.
     *
     * @param {AngularFirestore} angularFirestore
     * @memberof ProductSupplyService
     */
    constructor(private angularFirestore: AngularFirestore) {
        this.productSupplyCollection = angularFirestore.collection<ProductSupply>('product-supply');

        this.productSupplys$ = this.productSupplyCollection.snapshotChanges().pipe(
            map(actions => actions.map(
                action => {
                    const data = action.payload.doc.data() as ProductSupply;
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
     * @param {ProductSupply} productSupply
     * @memberof ProductSupplyDataService
     */
    add(productSupply: ProductSupply): Observable<ProductSupply> {
        this.productSupplyCollection.add(productSupply);

        return new Observable<ProductSupply>(observer => {
            observer.next(productSupply);
        });
    }

    /**
     * (description)
     *
     * @param {ProductSupply} productSupply
     * @memberof ProductSupplyService
     */
    delete(productSupply: ProductSupply): Observable<ProductSupply> {
        this.angularFirestore.doc<ProductSupply>('product-supply/' + productSupply.uid);

        return new Observable<ProductSupply>(observer => {
            observer.next(productSupply);
        });
    }

    /**
     * (description)
     *
     * @param {string} uid
     * @returns {Observable<ProductSupply>}
     * @memberof ProductSupplyService
     */
    load(uid: string): Observable<ProductSupply> {
        return new Observable<ProductSupply>(observer => {
            const productSupplyDocument =
                this.angularFirestore.doc<ProductSupply>('product-supply/' + uid);

            productSupplyDocument.valueChanges().subscribe(value => {
                if (value) {
                    const productSupply: ProductSupply = { uid: uid, ...value };

                    observer.next(productSupply);
                } else {
                    observer.next(null);
                }

            });
        });
    }

    /**
     * (description)
     *
     * @returns {Observable<ProductSupply[]>}
     * @memberof ProductSupplyServiceImpl
     */
    list(): Observable<ProductSupply[]> {
        return this.productSupplys$;
    }

    /**
     * (description)
     *
     * @param {ProductSupply} productSupply
     * @returns {Observable<ProductSupply>}
     * @memberof ProductSupplyService
     */
    update(productSupply: ProductSupply): Observable<ProductSupply> {
        const productSupplyDocument =
            this.angularFirestore.doc<ProductSupply>('product-supply/' + productSupply.uid);

        productSupplyDocument.set(productSupply, { merge: true });

        return new Observable<ProductSupply>(observer => {
            observer.next(productSupply);
        });
    }
}
