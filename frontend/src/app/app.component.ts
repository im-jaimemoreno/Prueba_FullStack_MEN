import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimeService } from './services/time.service';
import { UploadZoneComponent } from './components/upload-zone/upload-zone.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { FileDescriptionComponent } from './components/file-description/file-description.component';
import { TimeConversionResult } from './models/time-conversion-result';
import { TEXTS } from './constants/constants.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, UploadZoneComponent, ResultsTableComponent, FileDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly texts = TEXTS;
  title = this.texts.header.title;

  selectedFile = signal<File | null>(null);
  results = signal<TimeConversionResult[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private service: TimeService) {}

  // Handle file coming from child component
  handleFile(file: File) {
    // Validate .txt
    const isTxt = file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt');
    if (!isTxt) {
      this.error.set(this.texts.errors.invalidTxt);
      this.selectedFile.set(null);
      return;
    }
    this.selectedFile.set(file);
    this.error.set(null);
    this.results.set([]);
  }

  processFile() {
    const file = this.selectedFile();
    if (!file) {
      this.error.set(this.texts.errors.noFile);
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.results.set([]);

    this.service.uploadFile(file).subscribe({
      next: (res) => {
        this.results.set(res || []);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(this.mapError(err));
        this.loading.set(false);
      }
    });
  }

  private mapError(err: HttpErrorResponse): string {
    if (err.status === 0) return this.texts.errors.http0;
    if (err.status === 400) return this.texts.errors.http400;
    if (err.status === 404) return this.texts.errors.http404;
    if (err.status === 415) return this.texts.errors.http415;
    if (err.status === 500) return this.texts.errors.http500;
    return err.error?.message || err.message || this.texts.errors.unknown;
  }
}
