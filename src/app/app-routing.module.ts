import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterUserComponent } from "./views/register-user/register-user.component";
import { HomeComponent } from "./views/home/home.component";
import { ClientCrudComponent } from "./views/client-crud/client-crud.component";

import { ClientCreateComponent } from "./components/client/client-create/client-create.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterUserComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "clients",
    component: ClientCrudComponent,
  },
  {
    path: "clients/create",
    component: ClientCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
