import { Component, OnInit } from '@angular/core';
import { CoachServService } from '../service/coach-serv.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  coaches:any;
  public size:number=6;
  public currentpage:number=0;
  public totalpages:number=0;
  public pages:Array<number>=[];
  constructor(private coachServ:CoachServService) { }

  ngOnInit(): void {
  }

  OnGetCoach()
  {
    //  this.httpClient.get("https://retoolapi.dev/AgFTsW/data").
    // this.httpClient.get("http://localhost:8080/athletes").
    
    this.coachServ.getCoaches(this.currentpage,this.size)
    .subscribe((data: any)=>{
       this.coaches=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
         this.totalpages=data["page"].totalPages;
         this.pages=new Array<number>(this.totalpages);
         console.log(this.totalpages);
     },err=> 
     {console.log(err);}
     );
  }
  public searchCoach(value: any)
  {
    this.coachServ.getCoachByKeword(this.currentpage,this.size,value.keyword)
    .subscribe((data: any)=>{
       this.coaches=data;
      //data = JSON.parse(data.toString());
        //data=data as any[];
        //this.totalpages= data.page.totalPages;
         this.totalpages=data["page"].totalPages;
         this.pages=new Array<number>(this.totalpages);
         console.log(this.totalpages);
     },err=> 
     {console.log(err);}
     );
  }

}
