import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { skillInv } from 'src/app/interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skillsCol!: Observable<skillInv[]>;
  otherSkillsCol!: Observable<skillInv[]>;

  constructor(private afs: AngularFirestore) { }

  getSkills(){
    return this.skillsCol = this.afs.collection<skillInv>('skills').valueChanges()
  }

  getOtherSkills(){
    return this.otherSkillsCol = this.afs.collection<skillInv>('other-skills').valueChanges()
  }
}
