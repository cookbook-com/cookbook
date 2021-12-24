import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodPicService {

  constructor(private http: HttpClient) { }

  getFoodById(fImages: number) {  
    let url=`https://themealdb.com/api/json/v1/1/lookup.php?i=${fImages}`; 
    return this.http.get( url );
  }
  


}
