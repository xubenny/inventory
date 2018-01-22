import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component ({
    templateUrl: './item-list.component.html',
    providers: [HttpService]
})
export class ItemListComponent implements OnInit {
    constructor(private httpService: HttpService) {
        console.log('itemlist.constructor');
    }

    ngOnInit() {
        this.updateView();
    }

    updateView() {
        console.log('itemlist.updateView');
        this.httpService.getPageCount()
        .subscribe(
            (response) => {
                console.log('get page count: ', response.json());
                this.httpService.getItemsOfPage(1)
                .subscribe(
                    (response) => {
                        console.log('get items of page: ', response.json());
                    }
                );
            }
        );
    }
}
