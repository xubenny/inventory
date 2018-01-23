import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from './http.service';
import { PaginationComponent } from './pagination.component';

const url = `http://inventory.local/items/`;

class Item {
    id: number;
    name: string;
    quantity: number;
    status: string;
    user: string;
    vendor: string;
    model: string;
    memo: string;
    purchased_at: string;
    cost: number;
    link: string;
}

@Component ({
    templateUrl: './item-list.component.html',
    providers: [HttpService]
})
export class ItemListComponent implements OnInit {
    private items: Item[] = [];
    @ViewChild(PaginationComponent)
    private pagination: PaginationComponent;


    constructor(private httpService: HttpService) {
        console.log('itemlist.constructor');
    }

    ngOnInit() {
        this.updateView();
    }

    updateView(page: number = 1) {
        console.log('itemlist.updateView');
        this.httpService.get(url + page)
        .subscribe(
            (response) => {
                const data = response.json();
                this.items = data.data;
                this.pagination.setPageCount(data.last_page);

                this.items.forEach(function(item) {
                    item.purchased_at = item.purchased_at.substr(0, 10);
                });

                console.log('get items: ', data);
            }
        );
    }
}
