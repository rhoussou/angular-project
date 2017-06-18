import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions, URLSearchParams,RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CustomerService {

    baseUrl: string = 'http://127.0.0.1:8080/customers';
    
    constructor(private http:Http){}

     getCustomers(page?: number, itemsPerPage?: number) :Observable<any>{
        
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', itemsPerPage.toString());
        
         return this.http.get(this.baseUrl, {search: params })
            .map((res) => {
               return res.json();
            })
            .catch(this.handleError);
    }

    createCustomer(fileList:FileList, customer:any) {

        let formData: FormData = new FormData();
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers});

        if (fileList.length > 0) {
          let file: File = fileList[0];
          let formData: FormData = new FormData();
          formData.append('uploadFile', file, file.name);
          let headers = new Headers();
          headers.append('Accept', 'application/json');
          let options = new RequestOptions({ headers: headers });
          this.http.post(this.baseUrl+"/upload?id="+id, formData, options)
            .map(res => res.json())
            .catch(this.handleError)
            .subscribe(
            data => console.log('success'),
            error => console.log(error)
            )
        }
        
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl ,JSON.stringify(customer),options)
            .map(res => res.text() ? res.json() : {})
            .catch(this.handleError); 
     }

     updateCustomer(fileList:FileList, id:any, customer:any) {

        let formData: FormData = new FormData();
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers});

        if (fileList.length > 0) {
          let file: File = fileList[0];
          let formData: FormData = new FormData();
          formData.append('uploadFile', file, file.name);
          let headers = new Headers();
          headers.append('Accept', 'application/json');
          let options = new RequestOptions({ headers: headers });
          this.http.post(this.baseUrl+"/upload?id="+id, formData, options)
            .map(res => res.json())
            .catch(this.handleError)
            .subscribe(
            data => console.log('success'),
            error => console.log(error)
            )
        }

        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' +id, JSON.stringify(customer),options)
            .map(res => res.text() ? res.json() : {})
            .catch(this.handleError); 
     }

     deletePosition(customer:any){
        return this.http.put(this.baseUrl + '/' + customer.id, JSON.stringify(customer))
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
     }


     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
     }
}