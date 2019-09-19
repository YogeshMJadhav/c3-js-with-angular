import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BargraphComponent } from './bargraph/bargraph.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { GuageChartComponent } from './guage-chart/guage-chart.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BargraphComponent,
    LineGraphComponent,
    DonutChartComponent,
    GuageChartComponent,
    SplineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
