import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class HttpService {
    constructor(private http: Http) {
        console.log('httpservice.constructor');
    }

    get(uri: string) {
        return this.http.get(uri);
    }
}
