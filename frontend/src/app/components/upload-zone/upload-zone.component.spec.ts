import { TestBed } from '@angular/core/testing';
import { UploadZoneComponent } from './upload-zone.component';

describe('UploadZoneComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadZoneComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UploadZoneComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

