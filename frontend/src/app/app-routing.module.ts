import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChickenComponent } from './component/chicken/chicken.component';
import { RabitComponent } from './component/rabit/rabit.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { WateringComponent } from './component/watering/watering.component';

const routes: Routes = [
  { path: '',   redirectTo: '/sidebar', pathMatch: 'full' },
  { path: 'sidebar', component: SidebarComponent, children: [
    { path: 'rabits', component: RabitComponent },
    { path: 'chicken', component: ChickenComponent },
    { path: 'watering', component: WateringComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
