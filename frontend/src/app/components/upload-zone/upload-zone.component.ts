import { Component, EventEmitter, Output, Input, signal, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXTS } from '../../constants/constants.const';

@Component({
  selector: 'app-upload-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-zone.component.html',
  styleUrls: ['./upload-zone.component.scss']
})
export class UploadZoneComponent {
  @Input() disabled = false;
  @Input() fileName: string | null = null;
  @Output() fileSelected = new EventEmitter<File>();

  isDragOver = signal(false);
  readonly texts = TEXTS;

  @ViewChild('fileInput', { static: true }) fileInputRef!: ElementRef<HTMLInputElement>;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.emitIfTxt(file);
      input.value = '';
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    if (!this.disabled) this.isDragOver.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);

    if (this.disabled) return;
    const dt = event.dataTransfer;
    if (!dt) return;
    const file = dt.files && dt.files[0];
    if (file) this.emitIfTxt(file);
  }

  private emitIfTxt(file: File) {
    const isTxtType = file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt');
    if (isTxtType) {
      this.fileSelected.emit(file);
    } else {
      // Silently ignore; parent can show validation after event if desired
    }
  }

  onClick() {
    if (this.disabled) return;
    this.fileInputRef.nativeElement.click();
  }

  // Avoid browser navigating away when dropping outside
  @HostListener('window:dragover', ['$event'])
  onWindowDragOver(e: DragEvent) {
    e.preventDefault();
  }

  @HostListener('window:drop', ['$event'])
  onWindowDrop(e: DragEvent) {
    e.preventDefault();
  }
}
