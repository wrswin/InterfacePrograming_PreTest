import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheMovieDB';
  
  exampleMovieInfo = {
    title: 'How to Train Your Dragon 2',
    rating: 8.3,
    shortDescription: 'The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island\'s new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.',
    runtime: 102,
    releaseDate: new Date('June 13, 2014'),
    movieThumbnail: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg'
  };
}
