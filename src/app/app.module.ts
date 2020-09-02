import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// MATERIAL
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

// VIEWS
import { RegisterUserComponent } from "./views/register-user/register-user.component";
import { HomeComponent } from "./views/home/home.component";
import { ClientCrudComponent } from "./views/client-crud/client-crud.component";

// COMPONENTES
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ClientCreateComponent } from "./components/client/client-create/client-create.component";
import { ClientReadComponent } from "./components/client/client-read/client-read.component";

// POPUPS
import { MatConfirmDialogComponent } from "./components/popups/mat-confirm-dialog/mat-confirm-dialog.component";
import { PopupDetailClientComponent } from './components/popups/popup-detail-client/popup-detail-client.component';

// PIPES
import { FirstNamePipe } from './components/client/first-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    WelcomeComponent,
    ClientCrudComponent,
    ClientCreateComponent,
    ClientReadComponent,
    MatConfirmDialogComponent,
    PopupDetailClientComponent,
    FirstNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent],
})
export class AppModule {}
