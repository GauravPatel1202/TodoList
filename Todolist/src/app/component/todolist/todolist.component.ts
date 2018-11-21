import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  dataObject:any;
  fileterange:any;
  getlistData:any;
  constructor(public TestService:TestService, public http:HttpClient) { }

  ngOnInit() {
 
  }
   
}
