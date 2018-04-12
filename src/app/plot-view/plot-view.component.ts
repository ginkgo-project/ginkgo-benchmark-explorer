import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';


import { KeysPipe } from '../keys.pipe';
import { PropertyPipe } from '../property.pipe';
import { PlotScript } from '../plot-script';
import { DataFile } from '../data-file';
import { PlotConfigService } from '../plot-config.service';
import { PlotDataService } from '../plot-data.service'


@Component({
  selector: 'app-plot-view',
  templateUrl: './plot-view.component.html',
  styleUrls: ['./plot-view.component.css']
})
export class PlotViewComponent implements OnInit {

  constructor(
    private configService: PlotConfigService,
    private dataService: PlotDataService
  ) { }

  ngOnInit() {
  }

  @Input()
  set data_files(data_files: string[]) {
    this.dataService.getDataFiles(data_files)
      .subscribe(data => {
        this.data = data;
        this.updatePlot();
      });
  }

  get data_files(): string[] {
    return this.data.map(file => file.name);
  }

  @Input()
  set script_name(script_name) {
    this.configService.getPlotScript(script_name)
      .subscribe(script => {
        this.script = script;
        this.updatePlot();
      });
  }

  get script_name(): string {
    return this.script.name;
  }

  updatePlot(): void {
    // TODO: change implementation of this method once updated script files are
    //       available
    window.chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };
    let generator = new Function(this.script.code + "return process_data;");
    let generateConfig = generator();
    this.plotData = generateConfig(this.data[0].content);
  }

  data: DataFile[] = [];

  script: PlotScript = new PlotScript();

  plotData: any;
}
