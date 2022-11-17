import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  name = '';
  listString: Array<string> = ['String 1', 'String 2', 'String 3'];
  constructor() {}
  @ViewChild('form') mytemplateForm!: NgForm;
  functionName() {
    this.listString.push(this.name);
    console.log(this.listString);
    console.log(this.mytemplateForm);
    this.mytemplateForm.reset();
  }
}
