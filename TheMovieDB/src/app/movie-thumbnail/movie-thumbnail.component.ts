import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movieThumbnail: string;

  constructor() {
    
  }

  ngOnInit() {

  }
}