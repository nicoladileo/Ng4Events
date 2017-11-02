import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  strings = ['string1','string2','string3','string4'];
  actions = ['To upper','To upper','To upper','To upper'];
  classes = ['upper-class','upper-class','upper-class','upper-class'];
  
  doClick(index) {
    let action = this.actions[index];
    let itemClass = this.classes[index];
    if (action === 'To upper') {
      this.strings[index] = this.strings[index].toUpperCase();
      action = 'To lower';
      itemClass = 'lower-class';
    }
    else if (action === 'To lower') {
      this.strings[index] = this.strings[index].toLowerCase();
      action = 'To upper';
      itemClass = 'upper-class';
    }
    this.actions[index] = action;
    this.classes[index] = itemClass;
  }
}
