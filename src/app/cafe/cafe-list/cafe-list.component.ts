import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';


@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  darCafeBlend():number{
    let totaCafesBlend:number = 0;
    for (let index=0; index < this.cafes.length; index++)
    {
        let blend:Cafe =this.cafes[index];
            if (blend.tipo == "Blend")
            {
              totaCafesBlend+=1;
            }
    }
    return totaCafesBlend;
  }

  darCafeOrigen():number{
    let totaCafesOrigen:number = 0;
    for (let index=0; index < this.cafes.length; index++)
    {
        let origen:Cafe =this.cafes[index];
            if (origen.tipo == "Café de Origen")
            {
              totaCafesOrigen+=1;
            }
    }
    return totaCafesOrigen;
  }

  ngOnInit() {
    this.getCafes();
    this.darCafeBlend();
    this.darCafeOrigen();
  }

}
