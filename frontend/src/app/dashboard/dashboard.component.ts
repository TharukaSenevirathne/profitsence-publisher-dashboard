import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueCardComponent } from '../revenue-card/revenue-card.component';
import { StatisticsTableComponent } from '../statistics-table/statistics-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RevenueCardComponent, StatisticsTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  revenueCards = [
    { period: 'Yesterday', amount: '$250.54', color: 'blue' as const },
    { period: 'Last 7 Days', amount: '$250.54', color: 'yellow' as const },
    { period: 'This Month', amount: '$250.54', color: 'pink' as const },
    { period: 'Last Month', amount: '$250.54', color: 'purple' as const }
  ];
}
