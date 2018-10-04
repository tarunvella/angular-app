import { Component } from "@angular/core";
@Component({
  selector: 'pm-root',
  // inline template
  /*template: `
  <div><h1>{{pageTitle}}</h1>
  <div>My First Root Component</div>
  </div>
  `*/
  template: `
  <div><h1 innerText ={{pageTitle}}></h1>
  <pm-products></pm-products>
  `
})
export class AppComponent {
  pageTitle: string = 'Store Product Management';

  

}