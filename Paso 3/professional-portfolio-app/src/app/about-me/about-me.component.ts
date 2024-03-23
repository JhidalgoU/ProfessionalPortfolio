import { Component } from '@angular/core';
import * as aos from 'aos';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  ngOnInit() {
    aos.init();
  }
}
