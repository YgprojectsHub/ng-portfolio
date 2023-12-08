import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headtext',
  template: `<div class="mb-8 w-60 py-3 px-3 flex justify-start border-l-2 ml-[16.6vw] border-cyan-900 bgInfo">
  <h1 class="text-xl text-white font-medium"><span class="nav-link-color">#</span>{{header}}</h1>
</div>`
})
export class HeadtextComponent implements OnInit{

  @Input() header: string = ""
  
  constructor(){}

  ngOnInit(): void {
    
  }
}
