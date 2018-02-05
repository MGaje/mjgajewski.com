import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
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
