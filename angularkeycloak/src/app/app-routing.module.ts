import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthGuard } from './app.authguard';
import { XyzComponent } from './xyz/xyz.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'xyz',
    canActivate: [AppAuthGuard],
    component: XyzComponent,
    data: { roles: ['user'] },
  },
  {
    path: '',
    component: FirstpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AppAuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
