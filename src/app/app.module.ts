import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { PlotSelectorComponent } from './plot-selector/plot-selector.component';
import { PlotViewComponent } from './plot-view/plot-view.component';
import { PlotConfigService } from './plot-config.service';
import { PlotDataService } from './plot-data.service'
import { KeysPipe } from './keys.pipe';
import { PropertyPipe } from './property.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataSelectorComponent,
    PlotSelectorComponent,
    PlotViewComponent,
    KeysPipe,
    PropertyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PlotConfigService,
    PlotDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
