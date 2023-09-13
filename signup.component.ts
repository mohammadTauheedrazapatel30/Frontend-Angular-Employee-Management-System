import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpapiService } from '../empapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : any[] = [];

  constructor(private apiService : EmpapiService, private route: Router) { }

  ngOnInit(): void {
  }
  
  signUp = {
    name : '',
    phoneNo: '',
    email : '',
    password : '',
    address : '',
    city : '',
    state : '',
    zip : ''
  }
  
  states : any[] = [{id: 1,name: "Maharashtra"}, {id: 2,name: "Jammu & Kashmir"},{id:3,name: "Madhya Pradesh"}, {id:4,name: "Rajasthan"},{id:5,name: "Karnataka"}, {id:6,name: "Tamil Nadu"}];

  onSignUp(){ 
       this.apiService.onSignUp(this.signUp).subscribe(
         (response) => {
             console.log("Sign Up Successful !");  
             this.route.navigate(['/login']);           
         },
         (error) => {
            console.log("Invalid Credentials !");
         }
        );
  }

}
