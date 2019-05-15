import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ServiceWorkerTestComponent } from './components/service-worker-test/service-worker-test.component';
import { WebWorkerTestComponent } from './components/web-worker-test/web-worker-test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sw', component: ServiceWorkerTestComponent },
  { path: 'ww', component: WebWorkerTestComponent },
  { path: '**', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
