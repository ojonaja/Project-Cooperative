import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  handleClick(action: string) {
    console.log(action);
    alert(`You clicked: ${action}`);
  }
}
