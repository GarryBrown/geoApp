import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {

  }

  open(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 3000,
    })
  }

}
