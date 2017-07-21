import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode: string;
  opened: boolean;

  constructor() {
    this.setInitMode();
    Observable.fromEvent(window, 'resize')
      .debounceTime(200).map((e: Event) => e.target)
      .subscribe(
      (w: Window) => {
        this.mode = this.updateMode(w.innerWidth);
      }
      );
  }

  ngOnInit() {
  }


  hideNav() {
    this.opened = false;
  }

  toggleNav(opened) {
    this.opened = opened;
  }
  
  setInitMode() {
    this.mode = this.updateMode(window.innerWidth);
  }

  updateMode(width: number): string {
    return width >= 888 ? 'side' : 'over';
  }

  closeSideNav() {
    this.opened = false;

  }
}
