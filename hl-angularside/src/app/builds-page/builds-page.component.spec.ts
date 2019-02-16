import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsPageComponent } from './builds-page.component';

describe('BuildsPageComponent', () => {
  let component: BuildsPageComponent;
  let fixture: ComponentFixture<BuildsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
