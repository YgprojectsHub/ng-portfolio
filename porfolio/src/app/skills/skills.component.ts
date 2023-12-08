import { Component, Input, OnInit } from '@angular/core';
import { otherSkillInv, skillInv } from '../interfaces/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit{
  
  @Input() skillsData: skillInv[] = []
  @Input() otherskillsData: otherSkillInv[] = []

  ngOnInit(): void {
    
  }

}
