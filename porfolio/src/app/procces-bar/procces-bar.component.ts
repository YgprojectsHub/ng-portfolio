import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-procces-bar',
  templateUrl: './procces-bar.component.html'
})
export class ProccesBarComponent implements OnInit {

  @Input() skills: any;

  ngOnInit(): void {
    console.log(this.skills.percent)
  }
}
