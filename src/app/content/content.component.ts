import { Component, Input } from '@angular/core';
import { Word } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input() public results: Word[] = [];

  playAudio(audioSrc: string) {
    const audioElement = document.createElement('audio');
    audioElement.src = audioSrc;
    audioElement.play();
  }

  // public objectKeys(obj: { [key: string]: {} }): string[] {
  //   if (obj) {
  //     return Object.keys(obj);
  //   } else {
  //     return [];
  //   }
  // }
}
