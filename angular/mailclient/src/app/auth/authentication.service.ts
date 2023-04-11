import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface Credential {
  username?: string | null | undefined;
  password?: string | null | undefined;
  passwordConfirm?: string | null | undefined;
}

interface IsUsernameAvailable {
  available: boolean;
}

interface SignedResponse {
  username: string;
}

interface AuthResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://api.angular-email.com/auth';
  authenticated$ = new BehaviorSubject<boolean | null>(null);
  username = '';

  constructor(private http: HttpClient) {}

  isUsernameAvailable(username: string) {
    return this.http.post<IsUsernameAvailable>(`${this.url}/username`, {
      username,
    });
  }

  signUp(credential: Credential) {
    return this.http
      .post<SignedResponse>(`${this.url}/signup`, {
        ...credential,
        passwordConfirmation: credential.passwordConfirm,
      }) // pipe will be skipped if error occurs during signup
      .pipe(
        tap(({ username }) => {
          this.authenticated$.next(true);
          this.username = username;
        })
      );
  }

  signIn(credential: Credential) {
    return this.http
      .post<SignedResponse>(`${this.url}/signin`, { ...credential })
      .pipe(
        tap(({ username }) => {
          this.authenticated$.next(true);
          this.username = username;
        })
      );
  }

  signOut() {
    return this.http
      .post(`${this.url}/signout`, {})
      .pipe(tap(() => this.authenticated$.next(false)));
  }

  authStatus() {
    return this.http.get<AuthResponse>(`${this.url}/signedin`).pipe(
      tap(({ authenticated, username }) => {
        this.authenticated$.next(authenticated);
        this.username = username;
      })
    );
  }
}
