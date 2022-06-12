import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-in-client',
  templateUrl: './sign-in-client.component.html',
  styleUrls: ['./sign-in-client.component.css']
})
export class SignInClientComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
  }
  ngOnInit(): void {
  }
  showError() {
    this.toastr.error('Mật khẩu hoặc tài khoản không đúng');

  }
  showSuccess(){
     this.toastr.success('Đăng nhập thành công')
  }
  onSubmit() {
    // 1. Nhận dữ liệu từ form và call API login
   
      // 2. Lưu thông tin user vào localStorage: setItem(tên key lưu vào ls, dữ liệu string)
    
      // localStorage.getItem('loggedInUser');
      // 3. di chuyển về màn admin/products

      try {
        this.authService.login(this.loginForm.value).subscribe(data => {
          localStorage.setItem('loggedInUser', JSON.stringify(data));
          this.router.navigateByUrl('/admin/books');
          this.showSuccess();
          
        })
      } catch (error) { 
        return (error)
      }

      
    }
  }

