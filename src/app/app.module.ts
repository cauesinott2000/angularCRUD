import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    httpClientModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
