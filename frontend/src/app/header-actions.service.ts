import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderActionsService {
  private addWebsiteClick$ = new Subject<void>();

  /** Emits when the header "Add New Website" button is clicked */
  get onAddWebsiteClick() {
    return this.addWebsiteClick$.asObservable();
  }

  triggerAddWebsite(): void {
    this.addWebsiteClick$.next();
  }
}
