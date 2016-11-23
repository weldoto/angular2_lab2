import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conv-miles-to-km',
  templateUrl: './conv-miles-to-km.component.html',
  styleUrls: ['./conv-miles-to-km.component.css']
})
export class ConvMilesToKmComponent implements OnInit {
  clickMessage: number;
  ConvMilesToKm: number = 1.69034
  ConvKmToMiles: number = 0.62137
  constructor() { }
  onClickMe(myMessage: number){
    this.clickMessage = myMessage * this.ConvMilesToKm;
  }
   onClickMe2(myMessage: number){
     this.clickMessage = myMessage * this.ConvKmToMiles;
   }
  ngOnInit() {
  }

}
