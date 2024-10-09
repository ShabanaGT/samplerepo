import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {
  age:any ;
   showage:any;

  constructor() { }

  ngOnInit(): void {
  }
  agecalculator(){



      let convertage1 = new Date(this.age);
      

      let timeDiff= Math.abs(Date.now()-convertage.getTime());

      this.showage= Math.floor(timeDiff / (1000*3600*24)/365).toString() ;
     

  }

}





