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

 public getFirstAudio(phonetics: any[]): string {
    const phoneticWithAudio = phonetics.find((phonetic) => phonetic.audio);
    return phoneticWithAudio ? phoneticWithAudio.audio : 'Not found';
  }

  public playAudio(audioSrc: string) {
    const audio = new Audio(audioSrc);
    audio.play();
  }
}
