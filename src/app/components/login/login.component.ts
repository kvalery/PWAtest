import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: SocialUser

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    console.log('signInWithGoogle')
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  checkStorage(): void {
    let i = 0;
    let oJson = {};
    let sKey;
    for (; sKey = window.localStorage.key(i); i++) {
      oJson[sKey] = window.localStorage.getItem(sKey);
    }
    console.log(oJson);
  }
}
