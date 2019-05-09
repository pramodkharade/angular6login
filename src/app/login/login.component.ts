import { Component, OnInit } from '@angular/core';
import { AuthService} from '@app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault();
    const target =  event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.auth.getuserDetails(username,password)
    .subscribe((data) => {
      if(data['success']) {
        console.log('Data is 1::', data);
      } else {
        console.log('error msg:',data['message']);
      }
        
    });
    console.log(username, '::', password);
  }
}
