import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent implements OnInit {

  constructor() { }

  kg;
  g;
  pd;
  oun;

  checkIndex()
  {
    var sel = document.getElementById('opt') as HTMLSelectElement;
    var val = document.getElementById('val') as HTMLInputElement;
    var value = parseFloat(val.value);
    var s = sel.selectedIndex;
    this.kg = this.ctoKg(value, s).toFixed(4);
    this.g = this.ctoG(value, s).toFixed(4);
    this.pd = this.ctoPd(value, s).toFixed(4);
    this.oun = this.ctoOun(value, s).toFixed(4);
  }

  ctoKg(value, s)
  {
    switch (s) {
      case 0:
        return value;
        break;
      case 1:
        return(value / 1000);
        break;
      case 2:
        return(value / 2.205);
        break;
      case 3:
        return(value / 35.274);
        break;
      default:
        break;
    }
  }
  ctoG(value, s)
  {
    switch (s) {
      case 0:
        return (value * 1000);
        break;
      case 1:
        return(value);
        break;
      case 2:
        return(value * 453.592);
        break;
      case 3:
        return(value * 28.35);
        break;
      default:
        break;
    }
  }
  ctoPd(value, s)
  {
    switch (s) {
      case 0:
        return (value * 2.205);
        break;
      case 1:
        return(value / 453.592);
        break;
      case 2:
        return(value);
        break;
      case 3:
        return(value/ 16);
        break;
      default:
        break;
    }
  }
  ctoOun(value, s)
  {
    switch (s) {
      case 0:
        return (value * 35.274);
        break;
      case 1:
        return(value / 28.35);
        break;
      case 2:
        return(value * 16);
        break;
      case 3:
        return(value);
        break;
      default:
        break;
    }
  }
  ngOnInit() {
  }

}
