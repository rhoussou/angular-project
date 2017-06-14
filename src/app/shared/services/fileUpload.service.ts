import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FileUploadService {

  constructor () {}

  makeFileRequest (url: string, files: File[]): Observable<any> {
    return Observable.create(observer => {
        let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();

        for (let i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    observer.next(JSON.parse(xhr.response));
                    observer.complete();
                } else {
                    observer.error(xhr.response);
                }
            }
        };

        xhr.open('POST', url, true);
        xhr.send(formData);
    });
  }
}