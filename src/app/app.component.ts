import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_heatmap from 'highcharts/modules/heatmap'

HC_heatmap(Highcharts)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Numerical X-Axis Line Chart'
    },
    xAxis: {
      type: 'linear', // Set to 'linear' for numerical values
      title: {
        text: 'X-Value'
      },
      tickInterval: 1, // Interval between ticks
      tickLength: 5,
      tickWidth: 1,
      tickColor: '#666',
     
      
      
    },
    yAxis: {
      title: {
        text: 'HRM-RM-Thickness'      
      },
      
      labels: {
        format: '{value:.3f}' // Shows 2 decimal places
      }
      
    },
    series: [{
      name: 'Data Series',
      type: 'line',
      data: [
        [0, 5.972], 
        [10, 5.973],  // [x, y] pairs
        [20, 5.974],
        [30, 5.975],        
      ],
      color: '#4285F4'
    }],
    credits: {
      enabled: false
    },
    tooltip: {
      headerFormat: 'X: {point.x}<br/>',
      pointFormat: 'Y: {point.y}'
    }
  };

  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Numerical X-Axis Line Chart'
    },
    xAxis: {
      type: 'linear', // Set to 'linear' for numerical values
      title: {
        text: 'X-Value'
      },
      tickInterval: 1, // Interval between ticks
      tickLength: 5,
      tickWidth: 1,
      tickColor: '#666',

    },
    yAxis: {
      title: {
        text: 'Y-Value'
      }
    },
    series: [{
      name: 'Data Series',
      type: 'line',
      data: [
        [0, 1],  // [x, y] pairs
        [2, 5],
        [3, 8],
        [4, 2],
        [5, 7],
        [6, 10], // Can use decimal x-values
        [8, 14]
      ],
      color: '#4285F4'
    }],
    credits: {
      enabled: false
    },
    tooltip: {
      headerFormat: 'X: {point.x}<br/>',
      pointFormat: 'Y: {point.y}'
    }
  };
}
