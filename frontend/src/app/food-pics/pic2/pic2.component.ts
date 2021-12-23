import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';

@Component({
  selector: 'app-pic2',
  templateUrl: './pic2.component.html',
  styleUrls: ['./pic2.component.css']
})
export class Pic2Component implements OnInit {

  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById(52765)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

}
