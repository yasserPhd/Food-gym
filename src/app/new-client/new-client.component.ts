import { Component, OnInit } from '@angular/core';
import { AthleteServService } from '../service/athlete-serv.service';
import { Router } from '@angular/router';
import { Food } from '../food/Food';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  constructor(private atService:AthleteServService, private router:Router) { }
  private food:Food=new Food();
  ngOnInit(): void {
  }
  OnAddClient(value:any)
  {
    //console.log(value.nom);
    this.atService.addObject(this.atService.url+"/athletes", value).
    subscribe((rst: any)=>{
      console.log("passed substriction"+rst);
      this.food=value;
       this.router.navigateByUrl("/clients");
        
    },err=> 
    {console.log(err);}
    );
  }
}

