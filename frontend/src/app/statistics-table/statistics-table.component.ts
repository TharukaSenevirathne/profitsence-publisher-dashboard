import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-statistics-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './statistics-table.component.html',
  styleUrl: './statistics-table.component.scss'
})
export class StatisticsTableComponent {
  startDate: string = '';
  endDate: string = '';
  
  statistics = [
    {
      website: 'Angeora Solutions - Web',
      revenue: '$500.59',
      ecpm: '$0.818',
      impressions: '1,622,972'
    }
  ];
}
