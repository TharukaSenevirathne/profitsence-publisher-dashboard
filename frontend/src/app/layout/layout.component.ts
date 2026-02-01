import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'pi-home', route: '/dashboard' },
    { label: 'Reports', icon: 'pi-file', route: '/reports' },
    { label: 'Websites', icon: 'pi-globe', route: '/websites' },
    { label: 'Apps', icon: 'pi-th-large', route: '/apps' },
    { label: 'Ad Units', icon: 'pi-code', route: '/ad-units' },
    { label: 'Payments', icon: 'pi-dollar', route: '/payments' },
    { label: 'Guides', icon: 'pi-book', route: '/guides' },
    { label: 'Settings', icon: 'pi-cog', route: '/settings' }
  ];
}
