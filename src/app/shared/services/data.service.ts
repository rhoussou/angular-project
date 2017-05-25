import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class DataService {

    _baseUrl: string = 'https://api-2445581154346.apicast.io/positions';

    constructor(private http:Http){}

    //recuperations de la liste des orders
    getPositions(){
        return this.http.get(this._baseUrl+'?user_key=c3526fae1b3eaf162d3ae2b596e844e6')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    createPosition(position:any) {

        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(this._baseUrl + '/', JSON.stringify(position), {
                headers: headers
            })
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    updatePosition(position:any){

        return this.http.put(this._baseUrl + '/' + position.id, JSON.stringify(position))
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    deletePosition(position:any){
        return this.http.put(this._baseUrl + '/' + position.id, JSON.stringify(position))
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