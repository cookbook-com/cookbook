import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

<<<<<<< HEAD
=======

>>>>>>> f9d6a518df6efa8114f2e1fd79aa64078380587d
@Injectable({
  providedIn: 'root'
})
export class FoodPicService {

  constructor(private http: HttpClient) { }

  getFoodById(fImages: number) {  
    let url="https://themealdb.com/api/json/v1/1/lookup.php?i=52765"; 
    return this.http.get( url );
  }
  getFoodById2(fImages: number) {  
    let url="https://themealdb.com/api/json/v1/1/lookup.php?i=53011"; 
    return this.http.get( url );
  }
  getFoodById3(fImages: number) {  
    let url="https://themealdb.com/api/json/v1/1/lookup.php?i=53063"; 
    return this.http.get( url );
  }
  getFoodById4(fImages: number) {  
    let url="https://themealdb.com/api/json/v1/1/lookup.php?i=53024"; 
    return this.http.get( url );
  }
  getFoodById5(fImages: number) {  
    let url="https://themealdb.com/api/json/v1/1/lookup.php?i=53056"; 
    return this.http.get( url );
  }
  getFoodById6(fImages: number) {  
    let url="https://themealdb.com/api/json/v1/1/lookup.php?i=52794"; 
    return this.http.get( url );
  }


}
