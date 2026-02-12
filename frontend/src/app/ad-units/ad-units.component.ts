import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-ad-units',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    TagModule,
    TooltipModule
  ],
  templateUrl: './ad-units.component.html',
  styleUrls: ['./ad-units.component.scss'] 
})
export class AdUnitsComponent {
  activeTab = 'list';
  selectedSite = '';
  showCreateModal = false;

  selectedNewAdOption = '';
  
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

  adOptions = [
    { label: '300X250', value: '300x250' },
    { label: '728X90', value: '728x90' },
    { label: 'Sticky', value: 'sticky' },
    { label: 'Interstitial', value: 'interstitial' },
    { label: 'Banner', value: 'banner' }
  ];

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  submitCreate() {
    this.showCreateModal = false;
    this.selectedNewAdOption = ''; 
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  getSeverity(status: string): "success" | "warning" | "info" | "danger" | undefined {
    return status === 'Approved' ? 'success' : 'warning';
  }
}