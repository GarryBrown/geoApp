import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() hideSidebar = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  hideSideNav() {
    if (window.innerWidth <= 1246) {
      this.hideSidebar.emit(false);
    }
  }

}
