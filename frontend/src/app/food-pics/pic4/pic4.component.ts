import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';

@Component({
  selector: 'app-pic4',
  templateUrl: './pic4.component.html',
  styleUrls: ['./pic4.component.css']
})
export class Pic4Component implements OnInit {
  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById4(53024)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
}
