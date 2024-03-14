import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../services/app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Word } from '../interface';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  public isDarkTheme = false;
  public word: string = '';
  // public results: string = '';
  @Output() public searchEvent = new EventEmitter<Word[]>();

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });
  }

  public searchWord() {
    this.appService.searchWord(this.word).subscribe(
      (response) => {
        this.searchEvent.emit(response);
        console.log(response);
      },
      (error) => {
        console.error('Error fetching', error);
      }
    );
  }
}
