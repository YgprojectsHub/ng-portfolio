import { Component, Input } from '@angular/core';
import { linkInv } from '../interfaces/links';

@Component({
  selector: 'app-link-bar',
  templateUrl: './link-bar.component.html'
})
export class LinkBarComponent {

  @Input() linksData: linkInv[] = []
}
