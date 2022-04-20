import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuccessResponse } from '../model/success-response';
import {Message, MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RaspiServiceService {

  constructor(private readonly httpClient: HttpClient,
    private readonly messageService: MessageService) { }
  
  switchPrimaryRelay() {
    this.httpClient.get<SuccessResponse>(`http://localhost:5000/switchprimaryrelay`).subscribe(
        (result) => {
          this.messageService.add({
            severity: !!result?.severity ? result.severity : 'error', 
            summary: !!result?.summery ? result.summery : 'no summery', 
            detail: !!result?.message ? result.message: 'no message' 
          });
        }
      )
  }

}
