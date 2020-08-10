import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    constructor(private elementRef: ElementRef, private render: Renderer2) {
    }

    ngOnInit() {
    }

    @HostListener('mouseover') mouseover(eventData: Event){
        this.render.addClass(this.elementRef.nativeElement.children[1], "show");
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.render.removeClass(this.elementRef.nativeElement.children[1], "show");
    }
}