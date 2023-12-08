import { Component, Input } from '@angular/core';
import { contactInv } from '../interfaces/contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent  {
  @Input() contactData: contactInv[] = []
}
