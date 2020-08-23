import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h1>IssueComponent</h1>
    <a routerLink="../../home">Go to home</a>
    <button (click)="navigate()">Click Me!</button>
  `,
})
export class IssueComponent {
  counter = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('constructor');
  }

  navigate(): void {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        keyword: this.counter++,
      },
      queryParamsHandling: 'merge',
    });
  }
}
