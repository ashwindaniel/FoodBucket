import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { LunchComponent } from './menu/lunch/lunch.component';
import { DinnerComponent } from './menu/dinner/dinner.component';
import { SnacksComponent } from './menu/snacks/snacks.component';
import { TeaComponent } from './menu/tea/tea.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { HelpComponent } from './components/help/help.component';
import { MenusComponent } from './components/menus/menus.component';

import { DataService } from './services/data.service';
import { CartService } from './services/cart.service';


const routeConfig: Routes = [
  {
    path: 'breakfast',
    component: BreakfastComponent
  },
  {
    path: 'lunch',
    component: LunchComponent
  },
  {
    path: 'snacks',
    component: SnacksComponent
  },
  {
    path: 'tea',
    component: TeaComponent
  },
  {
    path: 'dinner',
    component: DinnerComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    SnacksComponent,
    TeaComponent,
    AboutUsComponent,
    CartComponent,
    HelpComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [DataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
