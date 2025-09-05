import { TestBed } from '@angular/core/testing';
import { ResultsTableComponent } from './results-table.component';

describe('ResultsTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsTableComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResultsTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

