import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevenueCardComponent } from '../revenue-card/revenue-card.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule, RevenueCardComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  activeTab: 'finalized' | 'mypayouts' | 'method' = 'finalized';
  availableBalance = 250.0;
  payouts = [
    { requestDate: 'Jan 10, 2026', amount: '$100.00', payoutDate: 'Jan 15, 2026', status: 'Paid' },
    { requestDate: 'Dec 22, 2025', amount: '$150.00', payoutDate: 'Dec 25, 2025', status: 'Paid' }
  ];

  // payment form
  paymentMethod = {
    method: '',
    currency: '',
    accountType: '',
    accountName: '',
    accountNumber: '',
    bankName: '',
    bankAddress: '',
    bankCity: '',
    bankState: '',
    bankProvince: '',
    bankCountry: '',
    bankZip: '',
    bankSwift: '',
    address: '',
    city: '',
    state: '',
    province: '',
    country: '',
    zip: ''
  };

  showRequestModal = false;
  requestedAmount = '';

  openRequestModal() {
    this.requestedAmount = '';
    this.showRequestModal = true;
  }

  closeRequestModal() {
    this.showRequestModal = false;
  }

  submitRequest() {
    const amt = parseFloat(this.requestedAmount as string);
    if (isNaN(amt) || amt <= 0) return;
    const today = new Date();
    this.payouts.unshift({ requestDate: today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), amount: `$${amt.toFixed(2)}`, payoutDate: 'Pending', status: 'Requested' });
    this.availableBalance = Math.max(0, this.availableBalance - amt);
    this.closeRequestModal();
  }

  savePaymentMethod() {
    alert('Payment method saved');
  }
}
