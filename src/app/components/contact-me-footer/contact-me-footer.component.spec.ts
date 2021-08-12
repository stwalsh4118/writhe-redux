import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeFooterComponent } from './contact-me-footer.component';

describe('ContactMeFooterComponent', () => {
  let component: ContactMeFooterComponent;
  let fixture: ComponentFixture<ContactMeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
