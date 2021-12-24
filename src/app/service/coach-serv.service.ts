import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoachServService {
  public url:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  public getCoaches(page:number, size:number){
    return this.httpClient.get(this.url+"/coaches?page="+page+"&size="+size) ;

  }
  public getCoachByKeword(page:number, size:number, mc:string){
    return this.httpClient.get(this.url+"/coaches/search/CoachKeywordPage?mc="+mc+"&page="+page
    +"&size="+size) ;
    

  }
  public deleteObject(url:any)
  {
    return this.httpClient.delete(url);
  }
  
 
}
