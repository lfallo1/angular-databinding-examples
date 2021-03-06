import {Component, Input, OnInit} from '@angular/core';
import {Server} from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input('server') element: Server;
  constructor() { }

  ngOnInit() {
  }

}
