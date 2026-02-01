import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  name = '';
  address = '';
  city = '';
  state = '';
  province = '';
  country = '';
  zipCode = '';
  phone = '';
  otherContactMethods = '';

  saveDetails(): void {
    // Placeholder for API call; could emit or call a service
    console.log('Settings saved', {
      name: this.name,
      address: this.address,
      city: this.city,
      state: this.state,
      province: this.province,
      country: this.country,
      zipCode: this.zipCode,
      phone: this.phone,
      otherContactMethods: this.otherContactMethods
    });
  }
}
