import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
