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
  public results: Word[] = [];
  public fontClass = '';
  private isDarkTheme = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appService: AppService
  ) {}

  private applyTheme() {
    if (this.isDarkTheme) {
      this.document.body.style.backgroundColor = '#000';
      this.document.body.style.color = '#fff';
    } else {
      this.document.body.style.backgroundColor = '#fff';
      this.document.body.style.color = '#000';
    }
  }

  private applyFonts() {
    switch (this.fontClass) {
      case 'Sans-serif':
        this.document.body.style.fontFamily = 'Sans-serif';
        break;
      case 'Serif':
        this.document.body.style.fontFamily = 'Serif';
        break;
      case 'Mono':
        this.document.body.style.fontFamily = 'monospace';
        break;
      default:
        this.document.body.style.fontFamily = 'Sans-serif';
        break;
    }
  }

  ngOnInit() {
    this.appService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
      this.applyTheme();
    });

    this.appService.currentFont.subscribe((fontFamily) => {
      this.fontClass = fontFamily;
      this.applyFonts();
    });
  }
}
