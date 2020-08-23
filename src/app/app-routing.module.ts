import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPreloadingStrategy } from './preloading-strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((M) => M.HomeModule),
  },
  {
    path: 'issue',
    loadChildren: () =>
      import('./issue/issue.module').then((M) => M.IssueModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
