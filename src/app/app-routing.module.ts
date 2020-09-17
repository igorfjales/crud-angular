import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// COMPONENTES
import { AuthenticationComponent } from "./views/authentication/authentication.component";
import { HomeComponent } from "./views/home/home.component";
import { ClientCrudComponent } from "./views/client-crud/client-crud.component";
import { ClientCreateComponent } from "./components/client/client-create/client-create.component";

// GUARD
import { UserGuard } from "../app/components/user/user.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [UserGuard],
  },
  {
    path: "clients",
    component: ClientCrudComponent,
    canActivate: [UserGuard],
  },
  {
    path: "clients/create",
    component: ClientCreateComponent,
    canActivate: [UserGuard],
  },
  {
    path: "",
    component: AuthenticationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
