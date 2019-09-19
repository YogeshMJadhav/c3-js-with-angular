import { Component } from '@angular/core';
import * as c3 from 'c3'; 

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent {
  lineClick = () => {
    const chart = c3.generate({
      bindto: '#barGraph',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'line'
        },
    });
    setTimeout(function () {
    chart.load({
      columns: [
          ['data1', 230, 190, 300, 500, 300, 400]
      ]
    });
    }, 1000);

    setTimeout(function () {
    chart.load({
      columns: [
          ['data3', 130, 150, 200, 300, 200, 100]
      ]
    });
    }, 1500);

    setTimeout(function () {
    chart.unload({
      ids: 'data1'
    });
    }, 2000);


    
  }
}
// data: {
//   columns: [
//       ['data1', 30, 200, 100, 400, 150, 250],
//       ['data2', 50, 20, 10, 40, 15, 25]
//   ]
// }
// });

// setTimeout(function () {
// chart.load({
//   columns: [
//       ['data1', 230, 190, 300, 500, 300, 400]
//   ]
// });
// }, 1000);

// setTimeout(function () {
// chart.load({
//   columns: [
//       ['data3', 130, 150, 200, 300, 200, 100]
//   ]
// });
// }, 1500);

// setTimeout(function () {
// chart.unload({
//   ids: 'data1'
// });
// }, 2000);
