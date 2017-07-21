import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() opened;
  @Output() toggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  show: boolean;
  user: any;

  constructor() {

  }

  ngOnInit() { }

  ngOnChanges() {
    this.show = this.opened;
  }

  toggle() {
    this.show = !this.show;
    this.toggleNav.emit(this.show);
  }

}
