import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  rightcyrcle:string="assets/rightcyrcle.png";
  cf:string="assets/Correct and false sign.png";
  rightBox:string="assets/rightBox.png";
  into:string="assets/into.png";

  toggleClass(){
    $(".right , .c-f , .rightBox, .into").toggleClass("none");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
