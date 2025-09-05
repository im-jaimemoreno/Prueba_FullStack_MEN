import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXTS } from '../../constants/constants.const';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly texts = TEXTS;
}

