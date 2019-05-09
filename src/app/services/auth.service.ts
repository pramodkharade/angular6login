import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getuserDetails(username, password) {
    /**
     * *
     * *
     * Post these details to get correct user info
     * *
     * *
     * *
     **/
     return this.http.post('http://localhost:12345/api/auth.php', {
      username,
      password
    });
  }
}
