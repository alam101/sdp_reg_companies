import { Component, ElementRef, ViewChild, AfterViewInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-health-rating',
  templateUrl: './health-rating.component.html',
  styleUrls: ['./health-rating.component.scss'],
})
export class HealthRatingComponent implements AfterViewInit, OnChanges {
  @Input() score: number | null = null;
  @ViewChild('barContainer') barContainer!: ElementRef;

  indicatorPosition = '10%';

  ngAfterViewInit() {
    this.updateIndicator();
  }

  ngOnChanges() {
    this.updateIndicator();
  }

  private updateIndicator() {
    if (!this.barContainer?.nativeElement) return;

    const totalSections = 5;
    const barWidth = this.barContainer.nativeElement.offsetWidth;

    let index = '0%';
    switch (this.score) {
      case -1:
        index = '10%'; // Bad
        break;
      case 1:
        index = '30%'; // Poor
        break;
      case 3:
        index = '50%'; // Good
        break;
      case 6:
        index = '70%'; // Great
        break;
      case 9:
        index = '90%'; // Excellent
        break;
      default:
        index = '0%';
    }

    const sectionWidth = barWidth / totalSections;
    this.indicatorPosition = index; // -6 centers the ▼
  }
}
