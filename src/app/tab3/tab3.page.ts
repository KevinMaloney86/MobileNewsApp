import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/newsservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  interData:any=[];
    constructor(private interService:NewsService) {}
  
    ngOnInit(){
  
      this.interService.GetInterData().subscribe(
        (data)=>{
          this.interData=data.articles;
        }
      );

    }
}
