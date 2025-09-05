import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeConversionResult } from '../../models/time-conversion-result';
import { TEXTS } from '../../constants/constants.const';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent {
  @Input() results: TimeConversionResult[] = [];
  readonly texts = TEXTS;

  downloadResultsAsJson(): void {
    if (!this.results?.length) return;
    const jsonString = JSON.stringify(this.results, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultados-hora.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
