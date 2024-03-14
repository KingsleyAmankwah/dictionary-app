import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContentComponent } from './content/content.component';
import { Word } from './interface';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SearchBarComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dictionary-app';
  public results: Word[] = [];
  isDarkTheme = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appService: AppService
  ) {}

  applyTheme() {
    if (this.isDarkTheme) {
      this.document.body.style.backgroundColor = '#000';
      this.document.body.style.color = '#fff';
    } else {
      this.document.body.style.backgroundColor = '#fff';
      this.document.body.style.color = '#000';
    }
  }

  ngOnInit() {
    this.appService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
      this.applyTheme();
    });
  }
}
