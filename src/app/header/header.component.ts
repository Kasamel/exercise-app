import { Component, EventEmitter, Output, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    @Output() navigationTypeSelect = new EventEmitter<{ navigationType: string }>();

    ngOnInit() {
        this.navigationTypeSelect.emit({ navigationType: 'recipe' });
    }

    setType(navigationTypeSelected: string) {
        this.navigationTypeSelect.emit({ navigationType: navigationTypeSelected });
    }
}