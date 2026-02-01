import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HeaderActionsService } from '../header-actions.service';

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
export class WebsitesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  websites: WebsiteRow[] = [
    { domain: 'domain-abc.com', category: 'News', status: 'approved' },
    { domain: 'domain-def.com', category: 'Sports', status: 'rejected' },
    { domain: 'domain-xyz.com', category: 'Business', status: 'pending' },
    { domain: 'domain-abc.lk', category: 'News', status: 'verifying' }
  ];

  constructor(private headerActions: HeaderActionsService) {}

  ngOnInit(): void {
    this.headerActions.onAddWebsiteClick
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.addNewWebsite());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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
