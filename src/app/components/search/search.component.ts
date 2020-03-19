import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  loading: boolean;
  artists: any[] = [];

  constructor( private spotify: SpotifyService) {}

  ngOnInit(): void {
  }

  buscar(term: string) {
    this.loading = true;
    console.log(term);
    this.spotify.getArtists( term )
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
  }

}
