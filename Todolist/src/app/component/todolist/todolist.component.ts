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
  table:any;
  constructor(public TestService:TestService, public http:HttpClient) { }

  ngOnInit() {
     this.getlistData()
     
  }
getlistData(){
     this.TestService.getdata().subscribe(data => {
    this.tablelist=data;
    this.table=data;
    this.tableData()
     }
    )
   }
 tableData(tableInput){
  if(!tableInput) return this.tablelist;
  if(tableInput==="All"){
    this.table =this.tablelist; 
  }else{
  this.table = this.tablelist.filter(function(data){
    return data.marks === tableInput;

  })
}
} 
}
