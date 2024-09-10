import { Component } from '@angular/core';
import { userInfo } from 'os';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {

formData = new FormGroup({
username: new FormControl('', Validators.required),
email: new FormControl('', [Validators.required, Validators.email]),
password: new FormControl('', Validators.required)
});

username: string = '';
email: string = '';
password: string = '';
registrationError: string = '';
model: any;

constructor(private authService: AuthService, private router: Router) {

}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  if (this.authService.isLoggedIn()) {
    this.router.navigate(['/login']);
  }
}

}
