import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-revenue-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue-card.component.html',
  styleUrl: './revenue-card.component.scss'
})
export class RevenueCardComponent {
  @Input() period: string = '';
  @Input() amount: string = '';
  @Input() color: 'blue' | 'yellow' | 'pink' | 'purple' = 'blue';
}
