import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const textColor = 'red';

      this.data = {
          labels: ['Target', 'Achieved'],
          datasets: [
              {
                  data: [50, 300],
                  backgroundColor: ['#C4F1E2', '#2BE09D'],
                  hoverBackgroundColor: ['#667390']
              }
          ]
      };


      this.options = {
          cutout: '60%',
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }
}
