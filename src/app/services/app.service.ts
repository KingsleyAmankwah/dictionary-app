import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  searchWord(word: string) {
    const url = `${this.API_URL}${word}`;
    console.log(url);
    return this.http.get<string>(url);
  }
}
