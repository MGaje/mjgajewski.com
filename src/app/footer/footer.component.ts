import { Component, OnInit } from '@angular/core';

import { version } from '../../environments/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public version: string = version;

  constructor() {
    // Empty.
  }

  public ngOnInit() {
    // Empty.
  }

}
