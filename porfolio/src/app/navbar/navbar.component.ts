import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isResp = signal<boolean>(false)

  changeState(): void {
    this.isResp() == false ? this.isResp.set(true) : this.isResp.set(false)
  }

}
