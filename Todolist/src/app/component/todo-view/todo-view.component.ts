import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TOdoViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.info = JSON.parse(sessionStorage.getItem('listdata'));
  }

}
