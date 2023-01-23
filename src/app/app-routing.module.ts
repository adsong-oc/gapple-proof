import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'redirect', component: RedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
