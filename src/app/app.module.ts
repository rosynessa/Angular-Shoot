import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
