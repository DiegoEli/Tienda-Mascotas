import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrosComponent } from './sobre-nosotros.component';

describe('SobreNosotrosComponent', () => {
  let component: SobreNosotrosComponent;
  let fixture: ComponentFixture<SobreNosotrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreNosotrosComponent]
    });
    fixture = TestBed.createComponent(SobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
