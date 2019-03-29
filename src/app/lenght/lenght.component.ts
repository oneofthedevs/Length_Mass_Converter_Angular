import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenght',
  templateUrl: './lenght.component.html',
  styleUrls: ['./lenght.component.css']
})

export class LenghtComponent implements OnInit {

  constructor() { }
  km;
  met;
  cm;
  mil;
  ft;
  in;
  mi;
  checkIndex()
  {
    var sel = document.getElementById('opt') as HTMLSelectElement;
    var val = document.getElementById('val') as HTMLInputElement;
    var value = parseFloat(val.value);
    var s = sel.selectedIndex;
    // var km = this.ctoKm(value, s);
    // var met = this.ctomet(value, s);
    // var cm = this.ctoCm(value, s);
    // var mm = this.ctoMm(value, s);
    // var inc = this.ctoInc(value, s);
    // var ft = this.ctoFt(value, s);
    // var mi = this.ctoMi(value, s);
    this.km = this.ctoKm(value, s).toFixed(4);
    this.met = this.ctomet(value, s).toFixed(2);
    this.cm = this.ctoCm(value, s).toFixed(2);
    this.mil = this.ctoMm(value, s).toFixed(1);
    this.ft = this.ctoFt(value, s).toFixed(4);
    this.in = this.ctoInc(value, s).toFixed(2);
    this.mi = this.ctoMi(value, s).toFixed(4);

    // console.log(km);
    // console.log(met);
    // console.log(cm);
    // console.log(mm);
    // console.log(inc);
    // console.log(ft);
    // console.log(mi);

    // document.getElementById('km').innerHTML = km;
    // document.getElementById('met').innerHTML = met;
    // document.getElementById('cm').innerHTML = cm;
    // document.getElementById('mm').innerHTML = mm;
    // document.getElementById('in').innerHTML = inc;
    // document.getElementById('ft').innerHTML = ft;
    // document.getElementById('mi').innerHTML = mi;
  }

  ctoKm(value, s)
  {
    switch (s) {
      case 0:
        return value;
        break;
      case 1:
        return(value / 1000);
        break;
      case 2:
        return(value / 100000);
        break;
      case 3:
        return(value / 1000000);
        break;
      case 4:
        return(value / 3280.839895);
        break;
      case 5:
        return(value / 39370.07874);
        break;
      case 6:
        return(value * 0.621371);
        break;
      default:
        break;
    }
  }
  ctomet(value, s)
  {
    switch (s) {
      case 0:
        return(value * 1000);
        break;
      case 1:
        return(value);
        break;
      case 2:
        return(value / 100);
        break;
      case 3:
        return(value / 1000);
        break;
      case 4:
        return(value / 3.2808);
        break;
      case 5:
        return(value / 39.37007);
        break;
      case 6:
        return(value * 0.000621371);
        break;
      default:
        break;
    }
  }
  ctoCm(value, s)
  {
    switch (s) {
      case 0:
        return (value*100000);
        break;
      case 1:
        return(value*100);
        break;
      case 2:
        return(value);
        break;
      case 3:
        return(value / 10);
        break;
      case 4:
        return(value / 0.032808);
        break;
      case 5:
        return(value / 0.3937007);
        break;
      case 6:
        return(value * 0.00000621371);
        break;
      default:
        break;
    }
  }
  ctoMm(value, s)
  {
    switch (s) {
      case 0:
        return (value*1000000);
        break;
      case 1:
        return(value*1000);
        break;
      case 2:
        return(value*10);
        break;
      case 3:
        return(value);
        break;
      case 4:
        return(value / 0.0032808);
        break;
      case 5:
        return(value / 0.03937007);
        break;
      case 6:
        return(value * 0.000000621371);
        break;
      default:
        break;
    }
  }
  ctoFt(value, s)
  {
    switch (s) {
      case 0:
        return (value / 0.0003048);
        break;
      case 1:
        return(value / 0.3048);
        break;
      case 2:
        return(value / 30.48);
        break;
      case 3:
        return(value / 304.8);
        break;
      case 4:
        return(value);
        break;
      case 5:
        return(value * 12);
        break;
      case 6:
        return(value / 0.000189394);
        break;
      default:
        break;
    }
  }
  ctoInc(value, s)
  {
    
    switch (s) {
      case 0:
        return (value * 39370.07874);
        break;
      case 1:
        return(value/ 0.0254);
        break;
      case 2:
        return(value / 2.54);
        break;
      case 3:
        return(value / 25.4);
        break;
      case 4:
        return(value * 12);
        break;
      case 5:
        return(value);
        break;
      case 6:
        return(value * 63360);
        break;
      default:
        break;
    }
  }
  ctoMi(value, s)
  {
    switch (s) {
      case 0:
        return (value / 1.609);
        break;
      case 1:
        return(value / 1609.34);
        break;
      case 2:
        return(value / 160934);
        break;
      case 3:
        return(value / 1609340);
        break;
      case 4:
        return(value / 5280);
        break;
      case 5:
        return(value / 63360);
        break;
      case 6:
        return(value);
        break;
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
