import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { linkInv } from 'src/app/interfaces/links';

@Injectable({
  providedIn: 'root'
})
export class SideLinksService {
  skillsCol!: Observable<linkInv[]>;

  constructor(private afs: AngularFirestore) {}

  getLinks(){
    return this.skillsCol = this.afs.collection<linkInv>("side-links").valueChanges();
  }
}
