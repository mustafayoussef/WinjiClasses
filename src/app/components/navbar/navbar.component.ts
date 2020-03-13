import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo:string="assets/Vector Smart Object.png";
  menu:string="assets/Menu.png";
  pic:string="assets/Pic.png";
  plusIcon:string="assets/+icon.png";
  constructor() { }

  ngOnInit(): void {
  }

}
