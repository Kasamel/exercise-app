import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() navigationTypeSelect = new EventEmitter<{ navigationType: string }>();

    setType(navigationTypeSelected: string) {
        this.navigationTypeSelect.emit({ navigationType: navigationTypeSelected });
    }
}