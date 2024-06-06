import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello Universe</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
}
