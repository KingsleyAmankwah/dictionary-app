import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Word } from '../interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private API_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme = this.isDarkThemeSubject.asObservable();

  toggleTheme() {
    const currentTheme = this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(!currentTheme);
  }

  searchWord(word: string) {
    const url = `${this.API_URL}${word}`;
    console.log(url);
    return this.http.get<Word[]>(url);
  }
}
