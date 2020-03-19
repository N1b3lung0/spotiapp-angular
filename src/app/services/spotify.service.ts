import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Ready');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQDiOYKSwcO2mXVurGKkgp06jZufcByoGHfoCZVHyyyfGmK1ekatFGTeJe2tabQCVZIFIwJUqxr-tczofWw'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=15`)
      .pipe( map( (data: any) => data.albums.items) );
  }

  getArtists( term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
      .pipe( map( (data: any) => data.artists.items ) );
  }

  getArtist( id: string) {
    return this.getQuery(`artists/${ id }`)
  }
}
