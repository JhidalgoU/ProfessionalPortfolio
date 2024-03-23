import { Component } from '@angular/core';
import * as aos from 'aos';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  ngOnInit() {
    aos.init();
  }

  
  
}
