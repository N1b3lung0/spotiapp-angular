import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Ready');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB_WOg1YDEdW64fNRto79V5jPjG5JDjDGKSBONvBqVcxVQE3mCoeehmMsxGmsWOX7DTqD44YWEAZY75lxs'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist( term: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB_WOg1YDEdW64fNRto79V5jPjG5JDjDGKSBONvBqVcxVQE3mCoeehmMsxGmsWOX7DTqD44YWEAZY75lxs'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ term }&type=artist&limit=15`, { headers });
  }
}
