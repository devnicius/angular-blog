import { Component, Input, OnInit } from '@angular/core';
import { mock } from '../../data/mock'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
protected items: any[] = [];
protected item: any;
protected i: number = 0;

  constructor() { }

  ngOnInit(): void {
    for (const item of mock) {
        this.items.push(item);
        console.log(item.isPrincipal)
    }

  }

}
