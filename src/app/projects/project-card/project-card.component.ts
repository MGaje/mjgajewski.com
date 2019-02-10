import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translate(100%, 0)', opacity: 0}),
          animate('500ms', style({ transform: 'translate(0, 0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({ transform: 'translate(0, 0)', opacity: 1}),
          animate('500ms', style({ transform: 'translate(100%, 0)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class ProjectCardComponent implements OnInit {

  @Input() public avatar: string;
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public image: string;
  @Input() public content: string;
  @Input() public url: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * This function fires when the "view on github" button is clicked.
   */
  public gotoGithub() {
    window.open(this.url, "_blank");
  }
}
