import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  public word: string = '';
  public results: string = '';

  constructor(private appService: AppService) {}

  public searchWord() {
    this.appService.searchWord(this.word).subscribe(
      (response) => {
        this.results = response;
        console.log(response);
      },
      (error) => {
        console.log('Error fetching', error);
      }
    );
  }
}
