import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-details',
  imports: [MatIconModule],
  templateUrl: './services-details.html',
  styleUrl: './services-details.scss',
})
export class ServicesDetails implements OnInit, OnDestroy {

  sourceData: any;
  constructor(private task: Tasks, private router: Router){

  }
  ngOnDestroy(): void {
    this.task.setTopic("", "");

  }
  ngOnInit(): void {
    this.task.getlist().subscribe((data)=>{
      this.sourceData = data;
      console.log();
      
      
    })
  }

  return() {
    this.router.navigate(["/"]);
}
  
}
