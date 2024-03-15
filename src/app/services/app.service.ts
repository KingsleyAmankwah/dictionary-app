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
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  private fontFamilySubject = new BehaviorSubject<string>('Sans-serif');

  public isDarkTheme = this.isDarkThemeSubject.asObservable();
  public currentFont = this.fontFamilySubject.asObservable();

  constructor(private http: HttpClient) {}

  public toggleTheme() {
    const currentTheme = this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(!currentTheme);
  }

  public setFontFamily(fontFamily: string) {
    this.fontFamilySubject.next(fontFamily);
  }

  public searchWord(word: string) {
    const url = `${this.API_URL}${word}`;
    return this.http.get<Word[]>(url);
  }
}
