import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IssueComponent } from './issue.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: IssueComponent,
      },
    ]),
  ],
  declarations: [IssueComponent],
})
export class IssueModule {}
