import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { TimerComponent } from './exo2/timer/timer.component';
import { Exo6Component } from './exo6/exo6.component';
import { Exo7Component } from './exo7/exo7.component';
import { Exo7bisComponent } from './exo7bis/exo7bis.component';


const routes: Routes = [
{path: 'exo1',component: Exo1Component },
{path: 'exo2',component: TimerComponent },
{path: 'exo3',component: Exo3Component },
{path: 'exo4',component: Exo4Component },
{path: 'exo5',component: Exo5Component },
{path: 'exo6',component: Exo6Component },
{path: 'exo7',component: Exo7Component },
{path: 'exo7Bis',component: Exo7bisComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { 

  
}
