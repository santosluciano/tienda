import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Configure firebase.
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Enviromento config
import { environment } from 'src/environments/environment';
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './products/product-alerts/product-alerts.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AddProductComponent } from './products/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductListComponent,
    CartComponent,
    ShippingComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
