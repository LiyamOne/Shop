import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LoginPageComponent} from './login-page/login-page.component'
import {AuthLayotComponent} from './shared/layouts/auth-layot/auth-layot.component'
import {SiteLayotComponent} from './shared/layouts/site-layot/site-layot.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {AuthGuard} from './shared/classes/auth.guard'
import {OverviewPageComponent} from './overview-page/overview-page.component'
import {AnalyticsPageComponent} from './analytics-page/analytics-page.component'
import {HistoryPageComponent} from './history-page/history-page.component'
import {OrderPageComponent} from './order-page/order-page.component'
import {CategoriesPageComponent} from './categories-page/categories-page.component'
import {CategoriesFormComponent} from './categories-page/categories-form/categories-form.component'
import { OrderCategoriesComponent } from './order-page/order-categories/order-categories.component'
import { OrderPositionsComponent } from './order-page/order-positions/order-positions.component'

const routes: Routes = [
  {
    path: '', component: AuthLayotComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayotComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'analytics', component: AnalyticsPageComponent},
      {path: 'history', component: HistoryPageComponent},
      {path: 'order', component: OrderPageComponent, children: [
          {path: '', component: OrderCategoriesComponent},
          {path: ':id', component: OrderPositionsComponent}
      ]},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'categories/new', component: CategoriesFormComponent},
      {path: 'categories/:id', component: CategoriesFormComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
