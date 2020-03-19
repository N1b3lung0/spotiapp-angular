import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  loading: boolean;

  artist: any = {};
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      console.log(params.id);
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist( id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe( resp => {
        console.log(resp);
        this.artist = resp;
        this.loading = false;
      });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks(id)
      .subscribe( resp => {
        console.log(resp);
        this.topTracks = resp;
      });
  }

}
