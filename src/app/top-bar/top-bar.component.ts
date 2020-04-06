import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../cart/cart.service';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input()
  user: User;
  
  constructor(
    private cartService: CartService,
    private afAuth: AngularFireAuth,
  ) { 
  }

  ngOnInit() {
  }

  logout() {
    this.afAuth.signOut();
  }
  
}
