import { Component, Input } from '@angular/core';
import { Gif } from '../../models/gifs.model';

@Component({
  selector: 'gifs-card-list',
  template: `
    <div class="row">
      <div *ngFor="let gif of gifs" class="col-md-3 col-sm-6">
        <div class="card mb-2 text-center bg-dark">
          <img
            [src]="gif.images.downsized_medium.url"
            [alt]="gif.title"
            class="card-img-top"
          />

          <div class="card-body text-white">
            <p class="card-text">{{ gif.title }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
