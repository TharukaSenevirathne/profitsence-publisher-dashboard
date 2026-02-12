import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { RevenueCardComponent } from '../revenue-card/revenue-card.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    TabViewModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    TagModule,
    TooltipModule,
    RevenueCardComponent 
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  activeIndex: number = 0; 
  
  availableBalance = 250.0;
  finalizedData = [
    { period: 'June 2023', revenue: 150.55, deductions: 10.55, commission: 15.00, final: 135.00, status: 'Pending' },
    { period: 'May 2023', revenue: 160.65, deductions: 10.65, commission: 15.00, final: 145.00, status: 'Finalized' }
  ];

  payouts = [
    { requestDate: 'Jan 10, 2026', amount: '$100.00', payoutDate: 'Jan 15, 2026', status: 'Paid' },
    { requestDate: 'Dec 22, 2025', amount: '$150.00', payoutDate: 'Dec 25, 2025', status: 'Paid' }
  ];

  paymentMethod = {
    method: null,
    currency: null,
    accountType: null,
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

  methodOptions = [
    { label: 'Bank Transfer', value: 'bank' },
    { label: 'PayPal', value: 'paypal' }
  ];

  currencyOptions = [
    { label: 'USD', value: 'usd' },
    { label: 'EUR', value: 'eur' }
  ];

  accountTypeOptions = [
    { label: 'Checking', value: 'checking' },
    { label: 'Savings', value: 'savings' }
  ];

  showRequestModal = false;
  requestedAmount = '';


  openRequestModal() {
    this.requestedAmount = '';
    this.showRequestModal = true;
  }

  submitRequest() {
    const amt = parseFloat(this.requestedAmount);
    if (isNaN(amt) || amt <= 0) return;
    
    const today = new Date();
    this.payouts = [
      { 
        requestDate: today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), 
        amount: `$${amt.toFixed(2)}`, 
        payoutDate: 'Pending', 
        status: 'Requested' 
      },
      ...this.payouts
    ];
    
    this.availableBalance = Math.max(0, this.availableBalance - amt);
    this.showRequestModal = false;
  }

  savePaymentMethod() {
    alert('Payment method saved successfully!');
  }

  getSeverity(status: string): "success" | "warning" | "info" | "danger" | undefined {
    switch (status) {
      case 'Paid':
      case 'Finalized':
        return 'success';
      case 'Pending':
      case 'Requested':
        return 'warning';
      default:
        return 'info';
    }
  }
}