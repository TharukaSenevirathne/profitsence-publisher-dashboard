import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.scss'
})
export class AppsComponent {
  appPackageName = 'App Package Name Here';
  showCreateModal = false;

  adUnits = [
    { unit: 'Banner', code: 'Pending' },
    { unit: 'Interstitial', code: '/22267843.34534596968/Banner_DU_ProfitSence' }
  ];

  adUnitOptions = ['Banner', 'Interstitial', 'AppOpen', 'Native', 'Rewarded'];

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  copyCode(code: string) {
    if (code === 'Pending') return;
    navigator.clipboard.writeText(code);
  }

  isPending(code: string): boolean {
    return code === 'Pending';
  }
}
