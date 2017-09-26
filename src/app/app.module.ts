import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app.routing";
import {FullLayoutComponent} from "./layouts/full-layout.component";
import {AuthService} from "./shared/services/auth.service";
import {CanActivateViaAuthGuard} from "./shared/services/guards/auth-guard.service";
import {StorageService} from "./shared/services/storage.service";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LaddaModule} from "angular2-ladda";
import {StageService} from "app/shared/services/stage.service";
import {SharedService} from "./shared/services/shared.service";
import {StageAdministrationModule} from "./Stage-Administration/Stage-Administration.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    LaddaModule,
    HttpModule,
    StageAdministrationModule
  ],
  providers: [
    AuthService,
    CanActivateViaAuthGuard,
    StorageService,
    StageService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
