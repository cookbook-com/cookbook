import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';
<<<<<<< HEAD

=======
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
@Component({
  selector: 'app-pic2',
  templateUrl: './pic2.component.html',
  styleUrls: ['./pic2.component.css']
})
export class Pic2Component implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
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
