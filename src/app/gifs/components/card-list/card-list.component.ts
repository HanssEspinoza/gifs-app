import { Component, Input } from '@angular/core';
import { Gif } from '../../models/gifs.model';

@Component({
  selector: 'gifs-card-list',
  template: `
    <div class="row">
      <gifs-card *ngFor="let gif of gifs" [gif]="gif" class="col-md-3 col-sm-6" />
    </div>
  `,
  styles: ``,
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
