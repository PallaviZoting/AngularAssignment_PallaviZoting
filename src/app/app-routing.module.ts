import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: 'main', component: MainpageComponent},
  { path: 'loginpage', component: LoginComponent },
  { path: 'signuppage', component: SignupComponent },
  {path:'',redirectTo:'/loginpage',pathMatch:'full'},
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule'
  },
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
