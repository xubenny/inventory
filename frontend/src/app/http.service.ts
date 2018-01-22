import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const url = `http://inventory.local/`;

@Injectable()
export class HttpService {
    constructor(private http: Http) {
        console.log('httpservice.constructor');
    }

    getPageCount() {
        return this.http.get(url + `hi`);
    }

    getItemsOfPage(page: number) {
        return this.http.post(url + `itemsOfPage`, {page: page});
    }
}
