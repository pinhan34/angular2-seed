
import {Directive, ElementRef,Renderer} from 'angular2/core'

@Directive({
    selector:'autoGrow',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }

})

export class AutoGrowDirective{
    //_el :ElementRef => ayni seyi private da yapabilirsin.. 
    //INJECTION OF HOST AND RENDERER VARS...
    constructor(private el:ElementRef ,private renderer:Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.el,'width','200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el, 'width','120');
    }
}