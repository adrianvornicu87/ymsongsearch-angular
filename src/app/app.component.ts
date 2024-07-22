import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPromptComponent } from './search-prompt/search-prompt.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SearchPromptComponent,
    SearchResultsComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchResults: string[] = [];
  errorMessage: string | null = null;

  constructor(private searchService: SearchService) {}

  onSearchChanged(searchTerm: string): void {
    this.searchService.search(searchTerm).subscribe(
      (results) => {
        this.searchResults = results;
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage =
          'An error occurred while fetching search results.' +
          JSON.stringify(error);
        this.searchResults = [];
      }
    );
  }
}
