import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type WebsiteStatus = 'approved' | 'rejected' | 'pending' | 'verifying';

export interface WebsiteRow {
  domain: string;
  category: string;
  status: WebsiteStatus;
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
    { domain: 'domain-def.com', category: 'Sports', status: 'rejected' },
    { domain: 'domain-xyz.com', category: 'Business', status: 'pending' },
    { domain: 'domain-abc.lk', category: 'News', status: 'verifying' }
  ];

  showCreateModal = false;
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

  showRejectionReasons(): void {
    // Placeholder for Rejection Reasons
  }

  resubmit(): void {
    // Placeholder for Re-Submit
  }
}
