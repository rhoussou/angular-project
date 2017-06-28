import { Component, OnInit, ViewChild, AfterViewInit,Input, Output,EventEmitter} from '@angular/core';
import { trigger,state,style,animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';
import { ICustomer } from '../shared/interfaces';
import { NotificationService } from '../shared/utils/notification.service';

import { Http, Response, Headers , RequestOptions, URLSearchParams,RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from '../shared/services/customer.service';


@Component({
    selector: 'customer-edit-form',
    templateUrl: 'customer-edit.component.html', 
})

export class CustomerEditComponent implements OnInit {
    customerEditForm:FormGroup;
    imageSrc: string = '';
    file:File;
    files:any[];
    fileList: FileList
    editedCustomerId : string;
    constructor(private fb:FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private customerService: CustomerService,
                private notificationService: NotificationService,
                private http:Http){


            this.customerEditForm = this.fb.group({
            gender: ['',Validators.required],
            lastname: ['',Validators.required],
            firstname: ['',Validators.required],
            username: 'not used',
            birthdate: ['2017-05-31T19:37:55.507Z',Validators.required],
            email : '',
            phone : '',
            adress: this.fb.group({
                suite : '',
                state:'',
                city   : '',
                zip: ''
            }),
            password: 'not used',
            enabled: 'true',
            lastPasswordResetDate: '2017-05-31T19:37:55.507Z',
            authorities: [{name: 'ROLE_USER'}],
            company : '',
            profession : ''
       });
    }

    ngOnInit() {}

    OnEdit(customer:any) {
        this.customerEditForm.patchValue(customer.value);
        this.editedCustomerId = customer.value.id;
     }


    onCustomerUpdateSubmit() {
        this.updateCustomer();
        this.back();  
    }

    updateCustomer() {
        this.customerService.updateCustomer(this.fileList, this.editedCustomerId, this.customerEditForm.value)
             .subscribe(data =>  this.notificationService.printSuccessMessage('le  client a été modifié avec succes'),
                 error => this.notificationService.printErrorMessage('Failed to created Customer'+ error)
              )
    }

    onChange(event) {
        
        this.fileList= event.target.files;
        this.file =this.fileList[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!this.file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(this.file);
        /*
        this.fileList= event.target.files;
        if (this.fileList.length > 0) {
          let file: File = this.fileList[0];
          let formData: FormData = new FormData();
          formData.append('uploadFile', file, file.name);
          let headers = new Headers();
          headers.append('Accept', 'application/json');
          let options = new RequestOptions({ headers: headers });
          this.http.post(this.baseUrl+"/upload?id=nono", formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
            data => console.log('success'),
            error => console.log(error)
            )
        }
        */
    }

    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
     }

    back() {
        this.router.navigate(['customers']);
    }


}