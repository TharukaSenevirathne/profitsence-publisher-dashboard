import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

export interface ReportRow {
  websiteApp: string;
  revenue: string;
  ecpm: string;
  impressions: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, OverlayPanelModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  @ViewChild('startPanel') startPanel!: OverlayPanel;
  @ViewChild('endPanel') endPanel!: OverlayPanel;

  selectedSiteApp = '';
  startDate: Date | null = null;
  endDate: Date | null = null;

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

  formatDateLabel(date: Date | null, placeholder: string): string {
    if (!date) return placeholder;
    return date.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  onStartDateSelect(): void {
    this.startPanel.hide();
  }

  onEndDateSelect(): void {
    this.endPanel.hide();
  }
}
