import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type WebsiteStatus = 'approved' | 'rejected' | 'pending' | 'verifying';

export interface WebsiteRow {
  domain: string;
  category: string;
  status: WebsiteStatus;
}

@Component({
  selector: 'app-websites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent {
  websites: WebsiteRow[] = [
    { domain: 'domain-abc.com', category: 'News', status: 'approved' },
    { domain: 'domain-def.com', category: 'Sports', status: 'rejected' },
    { domain: 'domain-xyz.com', category: 'Business', status: 'pending' },
    { domain: 'domain-abc.lk', category: 'News', status: 'verifying' }
  ];

  addNewWebsite(): void {
    // Placeholder for add website action
  }

  openAdUnits(): void {
    // Placeholder for Ad Units action
  }

  showRejectionReasons(): void {
    // Placeholder for Rejection Reasons
  }

  resubmit(): void {
    // Placeholder for Re-Submit
  }
}
