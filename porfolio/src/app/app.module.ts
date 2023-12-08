import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeadtextComponent } from './utils/headtext/headtext.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProccesBarComponent } from './procces-bar/procces-bar.component';
import { ContactComponent } from './contact/contact.component';
import { LinkBarComponent } from './link-bar/link-bar.component';

import { environment } from 'src/app/environment/environment';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { ContactService } from './shared/services/contact.service';
import { SideLinksService } from './shared/services/side-links.service';
import { SkillsService } from './shared/services/skills.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeadtextComponent,
    AboutComponent,
    SkillsComponent,
    ProccesBarComponent,
    ContactComponent,
    LinkBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [ContactService,SideLinksService,SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
