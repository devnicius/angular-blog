import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  protoCover:string = 'https://static-prod.adweek.com/wp-content/uploads/2017/07/ContentIsKing.jpg.webp';

  @Input()
  contentTitle:string = 'Conteúdo';

  @Input()
  contentDescription:string = 'Descrição do conteúdo';

  constructor() { }

  ngOnInit(): void {
  }

}
