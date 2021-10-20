import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayLoginSignUpForm: boolean = false;


  showLoginForm() {
    this.displayLoginSignUpForm = true;
  }

}