import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnlistTrooperComponent } from './enlist-trooper/enlist-trooper.component';
import { ImageCreatorComponent } from './image-creator/image-creator.component';
import { MyteamComponent } from './myteam/myteam.component';

const routes: Routes = [
  { path: 'enlistTrooper', component: EnlistTrooperComponent },
  { path:'imageCreator', component: ImageCreatorComponent },
  { path: 'myteam', component: MyteamComponent },
  { path:'', component:ImageCreatorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
