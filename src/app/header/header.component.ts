import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Freelance Contacts';
  name = 'by Ananda Kevin Refaldo Sariputra';

  constructor() {}

  ngOnInit(): void {}
}
