import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ReportRow {
  websiteApp: string;
  revenue: string;
  ecpm: string;
  impressions: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  selectedSiteApp = '';
  startDate = '';
  endDate = '';

  siteAppOptions = [
    { value: '', label: 'Select Site / App' },
    { value: 'angeora-web', label: 'Angeora Solutions - Web' },
    { value: 'angeora-app', label: 'Angeora Solutions - App' },
    { value: 'wasp-web', label: 'Wasp - Web' },
    { value: 'wasp-app', label: 'Wasp - App' }
  ];

  reportData: ReportRow[] = [
    { websiteApp: 'Angeora Solutions - Web', revenue: '$500.59', ecpm: '$0.818', impressions: '1,622,972' },
    { websiteApp: 'Angeora Solutions - App', revenue: '$125.65', ecpm: '$0.934', impressions: '2,156,940' },
    { websiteApp: 'Wasp - Web', revenue: '$689.26', ecpm: '$0.365', impressions: '1,498,149' },
    { websiteApp: 'Wasp - App', revenue: '$980.26', ecpm: '$0.169', impressions: '4,264,416' }
  ];

  openDatePicker(inputEl: HTMLInputElement | undefined): void {
    if (inputEl?.showPicker) {
      inputEl.showPicker();
    }
  }
}
