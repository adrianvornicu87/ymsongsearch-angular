import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  public serverUrl: string;
  @Input() results: any[] = [];
  constructor() {
    this.serverUrl = 'http://' + window.location.hostname + ':8000';
  }
}
