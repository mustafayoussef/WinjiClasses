import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 logoFooter:string="assets/itworx-edu.png";
  constructor() { }

  ngOnInit(): void {
  }

}
