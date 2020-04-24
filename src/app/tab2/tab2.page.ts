import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/newsservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  techData:any=[];
    constructor(private newsService:NewsService) {}
  
    ngOnInit(){
  
      this.newsService.GetTechData().subscribe(
        (data)=>{
          this.techData=data.articles;
        }
      );
  
    }
}
