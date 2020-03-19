import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor( private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(term: string) {
    console.log(term);
    this.spotify.getArtist( term )
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
      });
  }

}
