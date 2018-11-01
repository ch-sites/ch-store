import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { User } from "@Core/models";
import { Role } from "@Core/models/role.model";

@Injectable()
export class UserDataService {
    private userCollection: AngularFirestoreCollection<User>;
    private users$: Observable<User[]>;

    /**
     * Creates an instance of UserServiceImpl.
     *
     * @param {AngularFirestore} angularFirestore
     * @memberof UserServiceImpl
     */
    constructor(private angularFirestore: AngularFirestore) {
        this.userCollection = angularFirestore.collection<User>('user');

        this.users$ = this.userCollection.snapshotChanges().pipe(
            map(actions => actions.map(
                action => {
                    const data = action.payload.doc.data() as User;

                    return {...data};
                })
            )
        )
    }

    /**
     * (description)
     *
     * @param {User} user
     * @memberof UserDataService
     */
    add(user: User): Observable<User> {
        const userDocument = this.angularFirestore.doc<User>('user/' + user.uid);

        userDocument.set(user, { merge: true });

        return new Observable<User>(observer => {
            observer.next(user);
        });
    }

    /**
     * (description)
     *
     * @param {User} user
     * @memberof UserServiceImpl
     */
    delete(user: User): Observable<User> {
        this.angularFirestore.doc<User>('user/' + user.uid);

        return new Observable<User>(observer => {
            observer.next(user);
        });
    }

    /**
     * (description)
     *
     * @param {string} uid
     * @returns {Observable<User>}
     * @memberof UserServiceImpl
     */
    load(uid: string): Observable<User> {
        return new Observable<User>(observer => {
            const userDocument = this.angularFirestore.doc<User>('user/' + uid);

            userDocument.valueChanges().subscribe(value => {
                if (value) {
                    const user: User = { uid: uid, ...value };

                    observer.next(user);
                }
                else {
                    observer.next(null);
                }

            });
        })
    }

    /**
     * (description)
     *
     * @returns {Observable<User[]>}
     * @memberof UserServiceImpl
     */
    list(): Observable<User[]> {
        return this.users$;
    }

    /**
     * (description)
     *
     * @param {User} user
     * @returns {Observable<User>}
     * @memberof UserServiceImpl
     */
    update(user: User): Observable<User> {
        const userDocument = this.angularFirestore.doc<User>('user/' + user.uid);

        userDocument.set(user, { merge: true });

        return new Observable<User>(observer => {
            observer.next(user);
        });
    }
}
