import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';

@Component({
  selector: 'app-pic6',
  templateUrl: './pic6.component.html',
  styleUrls: ['./pic6.component.css']
})
export class Pic6Component implements OnInit {
  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById6(52794)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
}
