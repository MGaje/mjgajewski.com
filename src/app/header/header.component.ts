import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  /**
   * Opens up github profile in a new tab/window.
   */
  public gotoGithub() {
    window.open("https://github.com/mgaje", "_blank");
  }

  /**
   * Downloads resume directly from google docs in pdf form.
   */
  public downloadResume() {
    window.open("https://docs.google.com/document/d/1qO98d37TS0t4nVxITFe68VR2uS2cDbBMqxLEiOVGoVQ/export?format=pdf", "_blank");
  }
}
