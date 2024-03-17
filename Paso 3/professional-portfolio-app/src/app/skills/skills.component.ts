import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  mySkills: any[] = [
    {
      icon: 'fab fa-html5',
      skill: 'Html',
      level: 'Intermediate - Pro',
      hoverClass: 'html-hover'
    },
    {
      icon: 'fab fa-css3',
      skill: 'Css',
      level: 'Intermediate - Pro',
      hoverClass: 'css-hover'
    },
    {
      icon: 'fab fa-js-square',
      skill: 'JavaScript',
      level: 'Intermediate',
      hoverClass: 'js-hover'
    },
    {
      icon: 'fab fa-angular',
      skill: 'Angular',
      level: 'Beginner',
      hoverClass: 'angular-hover'
    },
    {
      icon: 'fab fa-java',
      skill: 'Java',
      level: 'Beginner - Intermediate',
      hoverClass: 'java-hover'
    },
    {
      icon: 'flask',
      skill: 'Flask',
      level: 'Beginner',
      hoverClass: 'flask-hover'
    },
    {
      icon: 'fas fa-code',
      skill: 'TypeScript',
      level: 'Beginner',
      hoverClass: 'ts-hover'
    },
    {
      icon: 'fab fa-node-js',
      skill: 'Node Js',
      level: 'Beginner',
      hoverClass: 'nodejs-hover'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
