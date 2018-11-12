import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { TOdoViewComponent } from './component/todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TOdoViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
