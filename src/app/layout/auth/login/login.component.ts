import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../../../@core/model/user";
import {AuthService} from "../../../@core/service/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  formControl: any;
  listUser!: User[];

  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (localStorage.getItem('User') !== null) {
    this.router.navigate(['/'])
  }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.getUser();
    this.formControl = this.loginForm.controls;

  }

  getUser() {
    this.userService.getUser().subscribe(res => {
      this.listUser = res;
      // console.log(res)
    })
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    const username = this.formControl.username.value;
    const password = this.formControl.password.value;
    const userCheck = this.listUser.some((res) => {
      return res.password === password && res.username === username
    })
    if(userCheck) {
      this.router.navigate(['']).then(r => {});
      // @ts-ignore
      const store = JSON.parse(localStorage.getItem('User')) ?? {};
      store['username'] = username;
      store['password'] = password;
      localStorage.setItem('User', JSON.stringify(store));
      console.log('nguyen')
    } else {
      alert('cay the nho')
    }

  }
}
