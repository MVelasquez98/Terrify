import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTerritorioFormComponent } from './asignacion-territorio-form.component';

describe('AsignacionTerritorioFormComponent', () => {
  let component: AsignacionTerritorioFormComponent;
  let fixture: ComponentFixture<AsignacionTerritorioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionTerritorioFormComponent]
    });
    fixture = TestBed.createComponent(AsignacionTerritorioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
