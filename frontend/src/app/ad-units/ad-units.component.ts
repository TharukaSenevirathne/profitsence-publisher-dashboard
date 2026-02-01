import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ad-units',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-units.component.html',
  styleUrl: './ad-units.component.scss'
})
export class AdUnitsComponent {
  activeTab = 'list';
  selectedSite = '';
  showCreateModal = false;

  adUnits = [
    { site: 'domain-abc.com', unit: '300X250', code: '<script src="https://domain-xyz.com"></script>', status: 'Approved' },
    { site: 'domain-xyz.com', unit: 'Sticky', code: '<script src="https://domain-xyz.com"></script>', status: 'Pending' },
    { site: 'com.domain-abc.app', unit: 'Banner', code: '/123456789/ad-unit', status: 'Approved' },
    { site: 'com.domain-xyz.app', unit: 'Interstitial', code: '/987654321/ad-unit', status: 'Pending' }
  ];

  sites = [
    { name: 'domain-abc.com' },
    { name: 'domain-xyz.com' },
    { name: 'com.domain-abc.app' },
    { name: 'com.domain-xyz.app' }
  ];

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  submitCreate() {
    this.showCreateModal = false;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  getStatusColor(status: string): string {
    return status === 'Approved' ? 'approved' : 'pending';
  }
}
