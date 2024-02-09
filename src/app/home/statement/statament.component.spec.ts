import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatamentComponent } from './statament.component';

describe('StatamentComponent', () => {
  let component: StatamentComponent;
  let fixture: ComponentFixture<StatamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
