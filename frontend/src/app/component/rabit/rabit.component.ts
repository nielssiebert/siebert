import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CurrentmillisService } from 'src/app/service/currentmillis.service';
import { RaspiServiceService } from 'src/app/service/raspi-service.service';

@Component({
  selector: 'app-rabit',
  templateUrl: './rabit.component.html',
  styleUrls: ['./rabit.component.css']
})
export class RabitComponent implements OnInit, OnDestroy {

  constructor(private primengConfig: PrimeNGConfig,
    public currentMillisService: CurrentmillisService,
    private readonly raspiService: RaspiServiceService,
    private readonly messageService: MessageService) { }

  ngOnDestroy(): void {
    this.currentMillisService.setActivePolling(false)
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.currentMillisService.setActivePolling(true)
    this.currentMillisService.pollCurrentMillis();
  }

  onPrimaryButtonClick(){
    this.messageService.add({severity:'info', summary: 'pressed primary', detail: 'Message Content'});
    this.raspiService.switchPrimaryRelay();
  }

}
