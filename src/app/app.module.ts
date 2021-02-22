import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSelectorComponent} from './selector';
import { AgGridModule } from 'ag-grid-angular';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AppSelectorComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    NoopAnimationsModule,
    FormsModule
  ],
  exports: [
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
