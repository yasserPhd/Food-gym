import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AthleteServService } from '../service/athlete-serv.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  athletes:any;
  public size:number=6;
  public currentpage:number=0;
  public totalpages:number=0;
  public pages:Array<number>=[];
  
  constructor(private atService:AthleteServService) {}

  ngOnInit(): void {
  }
  OnGetClient()
  {
    //  this.httpClient.get("https://retoolapi.dev/AgFTsW/data").
    // this.httpClient.get("http://localhost:8080/athletes").
    
    this.atService.getAthletes(this.currentpage,this.size)
    .subscribe((data: any)=>{
       this.athletes=data;
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
  public OnPageAthlete(i:number)
  {
   this.currentpage=i;
   this.OnGetClient();

  }
  public searchAthlete(value: any)
  {
    this.atService.getAthleteByKeword(this.currentpage,this.size,value.keyword)
    .subscribe((data: any)=>{
       this.athletes=data;
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
  public onDeleteAthlete(a:any)
  {
    let conf=confirm("Are you sure to delete this athlete?")
    if (conf)
    {
      //let url=a._links.self.href;
     //;
     console.log("this is url "+a._links.self.href);
    this.atService.deleteObject(a._links.self.href).
    subscribe(data=>{
      this.OnGetClient();
      console.log("coach deleted");
    },err=> 
    {console.log("error found"+err);}
    )
  }
  }
  
  
}
