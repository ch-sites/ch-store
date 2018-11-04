import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { tap, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
    /**
     * (description)
     *
     * @type {AngularFireUploadTask}
     * @memberof FileUploadComponent
     */
    task: AngularFireUploadTask;

    /**
     * (description)
     *
     * @type {Observable<number>}
     * @memberof FileUploadComponent
     */
    percentage: Observable<number>;

    /**
     * (description)
     *
     * @type {Observable<any>}
     * @memberof FileUploadComponent
     */
    snapshot: Observable<any>;

    /**
     * (description)
     *
     * @type {Observable<string>}
     * @memberof FileUploadComponent
     */
    downloadURL: Observable<string>;

    /**
     * (description)
     *
     * @type {boolean}
     * @memberof FileUploadComponent
     */
    isHovering: boolean;

    @Input()
    prefix = '';

    @Output()
    uploaded = new EventEmitter<string>();

    /**
     * Creates an instance of FileUploadComponent.
     *
     * @param {AngularFireStorage} storage
     * @param {AngularFirestore} db
     * @memberof FileUploadComponent
     */
    constructor(
        private storage: AngularFireStorage,
        private db: AngularFirestore
    ) { }

    /**
     * (description)
     *
     * @param {boolean} event
     * @memberof FileUploadComponent
     */
    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    /**
     * (description)
     *
     * @param {FileList} event
     * @returns
     * @memberof FileUploadComponent
     */
    startUpload(event: FileList) {
        const file = event.item(0);

        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');

            return;
        }

        const path = `${this.prefix}/${new Date().getTime()}_${file.name}`;
        const customMetadata = { app: 'Ch-Store' };

        this.task = this.storage.upload(path, file, { customMetadata });

        this.percentage = this.task.percentageChanges();

        this.snapshot = this.task.snapshotChanges().pipe(
            finalize(() => {
                this.downloadURL = this.storage.ref(path).getDownloadURL();

                this.downloadURL.subscribe(url => {
                    this.uploaded.emit(url);
                });
            })
        );
    }

    /**
     * Determines if the upload task is active.
     *
     * @param {*} snapshot
     * @returns
     * @memberof FileUploadComponent
     */
    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
}
