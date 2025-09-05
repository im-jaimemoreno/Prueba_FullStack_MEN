import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXTS } from '../../constants/constants.const';

@Component({
  selector: 'app-file-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="desc">
      <h2 class="title">{{ texts.fileDescription.title }}</h2>
      <p class="intro">{{ texts.fileDescription.intro }}</p>

      <h3 class="subtitle">{{ texts.fileDescription.exampleTitle }}</h3>
      <pre class="example">{{ texts.fileDescription.exampleContent }}</pre>

      <h3 class="subtitle">{{ texts.fileDescription.notesTitle }}</h3>
      <ul class="notes">
        <li *ngFor="let n of texts.fileDescription.notes">{{ n }}</li>
      </ul>
    </section>
  `,
  styleUrls: ['./file-description.component.scss']
})
export class FileDescriptionComponent {
  readonly texts = TEXTS;
}
