import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading: boolean;
  error: boolean;
  mensajeError: string;

  newReleases: any[] = [];

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      console.log(data);
      this.newReleases = data;
      this.loading = false;
    }, ( serviceError ) => {
      this.error = true;
      this.loading = false;
      console.log(serviceError);
      this.mensajeError = serviceError.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
