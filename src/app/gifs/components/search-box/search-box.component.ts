import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
  styles: ``,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  private tagInput!: ElementRef<HTMLInputElement>

  // searchTag(newTag: string) {
  //   console.log({ newTag });
  //   console.log( newTag );
  // }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
  }
}
