import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  gotoLink() {
    window.open("https://www.linkedin.com/in/mahesh-raj-16a028238/");
  }
}
