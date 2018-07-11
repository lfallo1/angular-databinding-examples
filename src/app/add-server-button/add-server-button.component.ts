import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from '../server/server.model';

@Component({
  selector: 'app-add-server-button',
  templateUrl: './add-server-button.component.html',
  styleUrls: []
})
export class AddServerButtonComponent implements OnInit {

  @Output('onAddServer') onAddServer = new EventEmitter<Server>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  addServer(type: string){
    this.onAddServer.emit(new Server(type, this.newServerName, this.newServerContent));
    this.newServerName = '';
    this.newServerContent = '';
  }

}
