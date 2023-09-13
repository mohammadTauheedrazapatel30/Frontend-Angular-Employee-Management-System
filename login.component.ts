import { Component, OnInit } from '@angular/core';
import { EmpapiService } from '../empapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // login user array
  loginUser : any[] = [];

  constructor(private apiService : EmpapiService) { }

  ngOnInit(): void {
  }
  
  // prop for binding the input types.
  credentials : any = {
    username : '',
    password : ''
  }
  
  // method on submit using angular ngSubmit
  onLogin(){
      const loginData = {
        username : this.credentials.username,
        password : this.credentials.password
      };
      
      this.apiService.onLogin(this.credentials).subscribe(
        (response) => {
            console.log("Login Successful !");
        },
        (error) => {
             console.error("Invalid Credentials !");
        }
      );
  }

}
