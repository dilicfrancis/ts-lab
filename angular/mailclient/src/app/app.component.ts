import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAuthenticated$ = new BehaviorSubject<boolean | null>(null);

  constructor(private authState: AuthenticationService) {
    this.isAuthenticated$ = this.authState.authenticated$;
  }

  signOut() {
    this.authState.signOut();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.authState.authStatus().subscribe();
  }
}
