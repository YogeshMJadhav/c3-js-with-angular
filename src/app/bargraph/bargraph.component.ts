import { Component } from '@angular/core';
import * as c3 from 'c3'; 

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css']
})
export class BargraphComponent {
  LineChart = () => {
    const chart = c3.generate({
      bindto: '#barGraph',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'bar'
        },
      bar: {
        width: {
            ratio: 0.2 // this makes bar width 50% of length between ticks
        }
      }
    });
    setTimeout(function () {
      chart.load({
          columns: [
              ['data3', 130, -150, 200, 300, -200, 100]
          ]
      });
  }, 1000);
  }
}
