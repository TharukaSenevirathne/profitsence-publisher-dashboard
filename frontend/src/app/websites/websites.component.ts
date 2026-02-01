import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type WebsiteStatus = 'approved' | 'rejected' | 'pending' | 'verifying';

export interface WebsiteRow {
  domain: string;
  category: string;
  status: WebsiteStatus;
  rejectionReasons?: string;
}

@Component({
  selector: 'app-websites',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent {
  websites: WebsiteRow[] = [
    { domain: 'domain-abc.com', category: 'News', status: 'approved' },
    {
      domain: 'domain-def.com',
      category: 'Sports',
      status: 'rejected',
      rejectionReasons:
        'Your site did not meet the minimum traffic requirement of 100,000 pageviews per month. Our review showed approximately 45,000 monthly pageviews.\n\n' +
        'Additionally, we could not verify the ads.txt file at the required location. Please ensure ads.txt is available at your domain root (e.g. domain-def.com/ads.txt) and contains the required lines before re-submitting.\n\n' +
        'Once these issues are addressed, you may use the Re-Submit option to request a new review.'
    },
    { domain: 'domain-xyz.com', category: 'Business', status: 'pending' },
    { domain: 'domain-abc.lk', category: 'News', status: 'verifying' }
  ];

  showCreateModal = false;
  showRejectionModal = false;
  showResubmitModal = false;
  resubmitSite: WebsiteRow | null = null;
  selectedRejectionReasons = '';
  selectedRejectionDomain = '';
  newDomainName = '';
  newCategory = '';
  categories = ['News', 'Sports', 'Business', 'Entertainment', 'Technology', 'Other'];

  addNewWebsite(): void {
    this.newDomainName = '';
    this.newCategory = '';
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  submitNewWebsite(): void {
    if (this.newDomainName?.trim() && this.newCategory) {
      this.websites.push({
        domain: this.newDomainName.trim(),
        category: this.newCategory,
        status: 'pending'
      });
      this.closeCreateModal();
    }
  }

  openAdUnits(): void {
    // Placeholder for Ad Units action
  }

  showRejectionReasons(site: WebsiteRow): void {
    this.selectedRejectionDomain = site.domain;
    this.selectedRejectionReasons = site.rejectionReasons ?? 'No specific rejection reasons were provided for this website.';
    this.showRejectionModal = true;
  }

  closeRejectionModal(): void {
    this.showRejectionModal = false;
    this.selectedRejectionReasons = '';
    this.selectedRejectionDomain = '';
  }

  get selectedRejectionReasonsParagraphs(): string[] {
    if (!this.selectedRejectionReasons?.trim()) return [];
    return this.selectedRejectionReasons
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
  }

  openResubmitModal(site: WebsiteRow): void {
    this.resubmitSite = site;
    this.showResubmitModal = true;
  }

  closeResubmitModal(): void {
    this.showResubmitModal = false;
    this.resubmitSite = null;
  }

  confirmResubmit(): void {
    if (this.resubmitSite) {
      // Update status to pending for re-review (placeholder for API call)
      this.resubmitSite.status = 'pending';
      this.closeResubmitModal();
    }
  }
}
