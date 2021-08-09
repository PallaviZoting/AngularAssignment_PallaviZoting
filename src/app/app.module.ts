import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AccountsModule } from './accounts/accounts.module';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, MainpageComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
