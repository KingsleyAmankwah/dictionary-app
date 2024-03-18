import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() public searchEvent = new EventEmitter<Word[]>();
  @Output() public errorEvent = new EventEmitter<string>();

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });
  }

  public searchWord() {
    this.appService.searchWord(this.word).subscribe(
      (response) => {
        this.searchEvent.emit([response]);
      },
      (error) => {
        this.errorEvent.emit(error.error.message);
      }
    );
  }

  public onInputChange() {
    if (!this.word) {
      this.searchEvent.emit([]);
      this.errorEvent.emit('');
    }
  }
}
