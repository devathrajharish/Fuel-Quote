import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
  
})
export class ProfileComponent {

  constructor() { }

}

/*
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  fullname = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  address1 = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
   address2 = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  city = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  state = new FormControl('', [
    Validators.required
  ]);
    zipcode = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(9)
  ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
  this.profileForm = this.formBuilder.group({
      fullname: this.fullname,
      address1: this.address1,
      address2: this.address2,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode
      
    });
  }

    save() {
    this.userService.register(this.profileForm.value).subscribe(
      res => {
        this.toast.setMessage('you successfully saved!', 'success');
        this.router.navigate(['/login']);
      },
      error => this.toast.setMessage('email already exists', 'danger')
    );
  }

}*/
