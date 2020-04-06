import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) { 
    this.loginForm.setValue({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {
          this.router.navigate(['/products']);
        })
    }});
  }

  createUser() {
    this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
       this.router.navigate(['/products']);
     }).catch(response => {
       this.errorMessage = response.message;
     });
  }

  signIn() {
    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
       this.router.navigate(['/products']);
     }).catch(response => {
       this.errorMessage = response.message;
     });
  }

}
