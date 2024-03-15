import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public rotation = 0;
  public isDarkTheme = false;
  public showFonts = false;
  public selectedFont = '';

  constructor(private appService: AppService) {}

  public toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.appService.toggleTheme();
  }

  public toggleFonts() {
    this.showFonts = !this.showFonts;
    this.rotation = this.showFonts ? 180 : 0;
  }

  public selectFont(font: string) {
    this.selectedFont = font;
    this.appService.setFontFamily(font);
  }
}
