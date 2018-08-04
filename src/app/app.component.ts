import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    this.loadApp();
  }

  loadApp() {
    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/apps/microapp1.js';

    content.appendChild(script);
    const app = document.createElement('micro-app1');
    content.appendChild(app);
  }
}
