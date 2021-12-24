import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutrServService } from '../service/nutr-serv.service';
import { Food } from '../food/Food';

@Component({
  selector: 'app-new-aliment',
  templateUrl: './new-aliment.component.html',
  styleUrls: ['./new-aliment.component.css']
})
export class NewAlimentComponent implements OnInit {
   private foods: Food[]=[];
   public currFood:Food= new Food();
   public mode:number=1;
  constructor(private nutService:NutrServService, private router:Router) { }

  ngOnInit(): void {
  }
    onAddAliment(food:Food)
    {
      return this.nutService.addItem(this.nutService.url,food).
      subscribe((data:any)=>{
        //this.foods=data;
        console.log("object added="+food);
        this.currFood=data;
        this.mode=2;
        //this.router.navigateByUrl("/aliments");
      },err=> 
      {console.log(err);}
      );
    }
}
