import { Component, OnInit } from '@angular/core';
import { FoodPicService } from 'src/app/food-pic.service';
<<<<<<< HEAD

=======
>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
@Component({
  selector: 'app-pic5',
  templateUrl: './pic5.component.html',
  styleUrls: ['./pic5.component.css']
})
export class Pic5Component implements OnInit {
  data: any;
  constructor(private foodServe: FoodPicService) { }

  ngOnInit(): void {
    this.foodServe.getFoodById5(53056)
    .subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
}
