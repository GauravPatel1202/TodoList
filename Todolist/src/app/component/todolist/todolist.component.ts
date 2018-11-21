import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  table:any;
  tablelist:any;
  info:String;
  testValue:String;
  activeTab:any;
  constructor(public TestService:TestService, public http:HttpClient,public router :Router) { 
   this.activeTab="All"
  }

  ngOnInit() {
     this.getlistData()
     this.info = sessionStorage.getItem('activeTab');
     if(!this.info){
      this.info="All"
     }
     
  }
getlistData(){
     this.TestService.getdata().subscribe(data => {
     this.tablelist=data;
     this.table=data;
     this.tableData(this.info)
     }
    )
   }

 tableData(tableInput){
  sessionStorage.setItem('activeTab', tableInput);
  this.activeTab=tableInput
  if(!tableInput||tableInput==="All"){
    this.activeTab="All"
   this.table =this.tablelist;
  }
  else{
  this.table = this.tablelist.filter(function(data){
    return data.marks === tableInput;

  })
}
} 
dataAddTODOlist(data){
    if(data===this.activeTab){
      this.table.push({
        "name":this.testValue,
        "marks":data
    })
    }else{
   this.tablelist.push({
        "name":this.testValue,
        "marks":data
    })
 }
   this.testValue=''
 }
dataView(data){
   sessionStorage.setItem('listdata', JSON.stringify(data));
   this.router.navigate(['/view']);
   }
}
