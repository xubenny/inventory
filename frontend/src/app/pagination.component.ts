import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html'
})
export class PaginationComponent {
    @Output() pageChanged = new EventEmitter<number>();

    private pageCount = 1;
    private pages: number[] = [];
    private currentPage = 1;

    setPageCount(pageCount: number) {
        if (pageCount === this.pageCount) {
            return;
        }

        this.pageCount = pageCount;
        this.pages = [];
        for (let i = 0; i < pageCount; i++) {
            this.pages.push(i + 1);
        }
        this.currentPage = 1;
    }

    private prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageChanged.emit(this.currentPage);
        }
    }

    private nextPage() {
        if (this.currentPage < this.pageCount) {
            this.currentPage++;
            this.pageChanged.emit(this.currentPage);
        }
    }

    private toPage(page: number) {
        if (page >= 1 && page <= this.pageCount && page !== this.currentPage) {
            this.currentPage = page;
            this.pageChanged.emit(this.currentPage);
        }
    }

}
