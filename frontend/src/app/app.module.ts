import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {FieldsetModule} from 'primeng/fieldset';
import { RippleModule } from 'primeng/ripple';
import {KnobModule} from 'primeng/knob';
import {ToastModule} from 'primeng/toast';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RabitComponent } from './component/rabit/rabit.component';
import { ChickenComponent } from './component/chicken/chicken.component';
import { WateringComponent } from './component/watering/watering.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RabitComponent,
    ChickenComponent,
    WateringComponent
  ],
  imports: [
    BrowserModule,
    FieldsetModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    RippleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    HttpClientModule,
    MenuModule,    
    KnobModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
