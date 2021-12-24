import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AthleteServService {
public url:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  public getAthletes(page:number, size:number){
    return this.httpClient.get(this.url+"/athletes?page="+page+"&size="+size) ;

  }
  public getAthleteByKeword(page:number, size:number, mc:string){
    return this.httpClient.get(this.url+"/athletes/search/KeywordPage?mc="+mc+"&page="+page
    +"&size="+size) ;
    

  }
  public deleteObject(url:any)
  {
    return this.httpClient.delete(url);
  }
  public deleteById(id:number)
  {
    return this.httpClient.delete(this.url+"/athletes/"+id);
  }
  public addObject(url:any, data:any)
  {
    return this.httpClient.post(this.url,data);
  }
 
}
