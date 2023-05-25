import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressesComponent } from './add-addresses.component';

describe('AddAddressesComponent', () => {
  let component: AddAddressesComponent;
  let fixture: ComponentFixture<AddAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
