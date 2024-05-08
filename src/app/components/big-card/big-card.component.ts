import { Component, Input, OnInit } from '@angular/core';
import { mock } from '../../data/mock'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ='';

  @Input()
  cardTitle:string = '';

  @Input()
  cardDescription:string = '';

  @Input()
  Id:string = '0';

  protected principal:any[] = [];


  constructor() { }

  ngOnInit(): void {
    for (const item of mock) {
      if (item.isPrincipal) {}
    }
  }

}
