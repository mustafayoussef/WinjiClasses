import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ExploreComponent } from './components/explore/explore.component';
import { MyContestsComponent } from './components/my-contests/my-contests.component';
import { MyPinsComponent } from './components/my-pins/my-pins.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlusComponent } from './components/plus/plus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    HowItWorksComponent,
    ExploreComponent,
    MyContestsComponent,
    MyPinsComponent,
    HeaderComponent,
    FooterComponent,
    PlusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
