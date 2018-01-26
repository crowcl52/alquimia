import { Component, OnInit } from '@angular/core';

declare var particlesJS:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 5,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
            value: 100,
        },
        color: {
            value: '#111'
        },
        shape: {
            type: 'polygon',
        },
      }
    };

  }

  

}
