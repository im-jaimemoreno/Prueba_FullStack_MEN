import { TestBed } from '@angular/core/testing';
import { FileDescriptionComponent } from './file-description.component';

describe('FileDescriptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDescriptionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FileDescriptionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

