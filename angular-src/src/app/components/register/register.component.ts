import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  ngOnInit() {
  }
   
  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password

    }

    /*

    // Required Fields
    if(!this.validateService.validateResgister(user)){
      this.flashMessage.show("Please fill in all fields" , {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){ 
      this.flashMessage.show("Please use a valid email" , {cssClass: 'alert-danger', timeout:3000});
      return false;
    } */
  } 

}
