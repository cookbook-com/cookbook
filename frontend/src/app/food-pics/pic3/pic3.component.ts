import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';

@Component({
  selector: 'app-pic3',
  templateUrl: './pic3.component.html',
  styleUrls: ['./pic3.component.css']
})
export class Pic3Component implements OnInit {
  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById(53063)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

}
