import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  scrollTo(section: string) {
    this.scrollService.scrollToElement(section);
  }

}
