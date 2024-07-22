import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-prompt.component.html',
  styleUrls: ['./search-prompt.component.css'],
})
export class SearchPromptComponent {
  searchTerm: string = '';
  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchChanged.emit(this.searchTerm);
  }
}
