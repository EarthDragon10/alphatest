import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/services/route-guard.service';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GridArticlesComponent } from './pages/grid-articles/grid-articles.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome/:userId',
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'articles/grid',
    component: GridArticlesComponent,
    canActivate: [RouteGuardService],
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
