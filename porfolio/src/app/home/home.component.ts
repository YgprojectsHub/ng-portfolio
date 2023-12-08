import { Component,OnInit } from '@angular/core';
import {  otherSkillInv, skillInv } from '../interfaces/skill';
import { signal } from '@angular/core';
import { linkInv } from '../interfaces/links';
import { ContactService } from '../shared/services/contact.service';
import { SideLinksService } from '../shared/services/side-links.service';
import { SkillsService } from '../shared/services/skills.service';
import { contactInv } from '../interfaces/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  isResp = signal<boolean>(false)
  
  skillsData: skillInv[] = []
  otherSkillsData: otherSkillInv[] = []
  linksData: linkInv[] = []
  contactData: contactInv[] = []

  constructor(private contactService: ContactService, private sideLinksService: SideLinksService, private skillService: SkillsService){}

  ngOnInit(): void {
    this.contactService.getContact().subscribe((data) => {
      this.contactData = data;
    });

    this.sideLinksService.getLinks().subscribe((data) => {
      this.linksData = data;
    });

    this.skillService.getSkills().subscribe((data) => {
      this.skillsData = data;
    });

    this.skillService.getOtherSkills().subscribe((data) => {
      this.otherSkillsData = data;
    });
  }

  changeState(): void {
    this.isResp() == false ? this.isResp.set(true) : this.isResp.set(false)
  }

}
