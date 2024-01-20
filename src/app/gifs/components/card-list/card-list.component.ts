import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  template: `
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="card mb-2 text-center bg-dark">
          <!-- TODO: Crear imagen -->

          <div class="card-body text-white">
            <p class="card-text">Hola Mundo</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardListComponent {}