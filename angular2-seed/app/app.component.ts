import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.components';
import { AuthorComponent } from './authors.components';

@Component({
    selector: 'my-app',
    template: `<h1>Onur - Angular 2 App</h1><courses></courses>
    <authors></authors>
    `,
    directives:[CoursesComponent ,AuthorComponent]
})
export class AppComponent { 

}