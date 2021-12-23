import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';

@Component({
  selector: 'app-pic3',
  templateUrl: './pic3.component.html',
  styleUrls: ['./pic3.component.css']
})
export class Pic3Component implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById3(53063)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

}
