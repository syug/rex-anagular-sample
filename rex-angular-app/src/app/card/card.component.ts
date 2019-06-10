import { Component, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-rex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string;
  @Input() imgsrc: string;
  // title = 'Rakuten Travel';
  text =
    'According to travelers, the Kyoto Sagano Bamboo forest is one of worlds most beautiful groves.';
}
