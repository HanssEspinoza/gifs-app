import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'an7P8PxjMz7KYMmyq5Rj6OpKEB2Bc2LQ';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=an7P8PxjMz7KYMmyq5Rj6OpKEB2Bc2LQ&q=warcraft&limit=10')

    // const data = await resp.json();
    // console.log(data)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 10);

    this.http
      .get(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory.slice(0, 10);
  }
}
