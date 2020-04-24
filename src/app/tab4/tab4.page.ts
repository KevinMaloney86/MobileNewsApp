import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/newsservice.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  implements OnInit {
  getData:any=[];
    constructor(private getService:NewsService) {}
  
    ngOnInit(){
  
      this.getService.GetData().subscribe(
        (data)=>{
          this.getData=data.articles;
        }
      );

    }

}
