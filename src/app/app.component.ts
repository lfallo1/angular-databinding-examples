import { Component } from '@angular/core';
import {Server} from './server/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [];

  onAddServer(server: Server) {
    this.serverElements.push(server);
  }
}
