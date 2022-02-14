import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list'
  taskValue:any[] = []
  addTask(val:string){
    this.taskValue.push({id:this.taskValue.length,name:val});
    console.warn(this.taskValue);
  }
  remoteItem(num:number){
    this.taskValue.filter(function(item) {
        return item !== num;
    })
    this.taskValue = this.taskValue.filter(val=>val.id !==num)
  }

}
