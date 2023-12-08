import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { contactInv } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private skillsCol!: Observable<contactInv[]>;

  constructor(private afs: AngularFirestore) { }

  getContact(){
    return this.skillsCol = this.afs.collection<contactInv>("contact").valueChanges();
  }
}
