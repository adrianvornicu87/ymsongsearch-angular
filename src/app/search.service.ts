import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'http://' + window.location.hostname + ':8000/search'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  search(query: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${query}`);
  }
}
