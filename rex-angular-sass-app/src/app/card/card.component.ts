import { Component, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-rex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string;
  @Input() imgsrc: string;
}
