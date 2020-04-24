import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/newsservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
newsData:any=[];
  constructor(private newsService:NewsService) {}

  ngOnInit(){

    this.newsService.GetNewsData().subscribe(
      (data)=>{
        this.newsData=data.articles;
      }
    );

  }

}