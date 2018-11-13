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
  	this.getlist()
  	this.test()
    this.getlistData()
  }
    test(){
    let character = this.TestService.getLocation1();
    let characterHomeworld = this.TestService.getLocation2();

    forkJoin([character, characterHomeworld]).subscribe(results => {
      console.log(results[0],results[1])
    });
   }
  getlist(){
	this.TestService.getLocation().subscribe(data => {
	this.dataObject=data
	console.log(this.dataObject)
 })
};
getlistData(){
     this.TestService.getdata().subscribe(data => {

          this.table=data.sort(function(a , b){
            let textA = a.name.toUpperCase();
             let textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
   });
}}
}
