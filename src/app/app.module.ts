import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { SearchPromptComponent } from './search-prompt/search-prompt.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [AppComponent, SearchPromptComponent, SearchResultsComponent],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
