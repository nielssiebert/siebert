import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CurrentMillis } from '../model/currentmillis';

@Injectable({
  providedIn: 'root'
})
export class CurrentmillisService implements OnInit {

  public currentMillis: Number = 0;
  private i = 2;
  private activePolling: boolean = true;

  constructor(private httpClient: HttpClient) { 
    console.log('CurrentmillisService constructor')
  }

  ngOnInit(){
    
  } 

  async pollCurrentMillis(){
    while( this.activePolling ) {
      this.httpClient.get<CurrentMillis>(`http://localhost:5000/currentmillis`).subscribe(
        (result) => this.currentMillis = result.currentMillis
      )
      this.i= this.i+1
      console.log('delayed')
      await this.delay(1500);
    }
  }

  public setActivePolling(a: boolean) {
    this.activePolling = a;
  }
  
  public getActivePolling(): boolean {
    return this.activePolling;
  }

  delay = (ms: number) => new Promise(res => setTimeout(res, ms));
}
