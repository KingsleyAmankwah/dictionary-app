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
  isDarkTheme = false;
  public showFilters = false;

  constructor(private appService: AppService) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.appService.toggleTheme();
  }
}
