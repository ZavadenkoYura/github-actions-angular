import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the couner', () => {
    expect(document.querySelector('p')).toBeTruthy();
  });

  it('Should be equel to zero', () => {
    expect(component.counter()).toBe(0);
  });

  it('Should increment and be called', () => {
    // Initialize
    spyOn(component, 'increment').and.callThrough();
    // act
    component.increment();
    // assert
    expect(component.increment).toHaveBeenCalled();
    expect(component.counter()).toBe(1);
  });

  it('Should display an updated counter', () => {
    // Initialize
    const p = fixture.nativeElement.querySelector('p');
    // act
    component.increment();
    fixture.detectChanges();
    // assert
    expect(p.textContent).toContain('1');
  });
});
