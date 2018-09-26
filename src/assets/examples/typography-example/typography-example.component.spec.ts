import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyExampleComponent } from './typography-example.component';

describe('TypographyExampleComponent', () => {
  let component: TypographyExampleComponent;
  let fixture: ComponentFixture<TypographyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
