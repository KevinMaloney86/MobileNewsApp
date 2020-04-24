import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

GetNewsData():Observable<any>{
  return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=a5e205d9a264474a8fe070dddfc4f070');
}
GetTechData():Observable<any>{
  return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=technology&sortBy=publishedAt&apiKey=a5e205d9a264474a8fe070dddfc4f070');
}
GetInterData():Observable<any>{
  return this.httpClient.get('http://newsapi.org/v2/top-headlines?q=international&category=business&apiKey=a5e205d9a264474a8fe070dddfc4f070')
}
GetData():Observable<any>{
  return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&q=COVid-19&apiKey=a5e205d9a264474a8fe070dddfc4f070');
}

}