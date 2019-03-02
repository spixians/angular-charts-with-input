import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DemandClass, PostDemandClass } from './classes/demand-class';
import { DemandService } from './services/demand.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    DemandClass,
    DemandService,
    PostDemandClass
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
