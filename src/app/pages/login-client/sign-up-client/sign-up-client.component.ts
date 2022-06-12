import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up-client',
  templateUrl: './sign-up-client.component.html',
  styleUrls: ['./sign-up-client.component.css']
})
export class SignUpClientComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private userService: UserService, // cung cấp createUser
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute, // lấy ra các tham số trong url
    private toastr: ToastrService
  ) {
    this.userForm = new FormGroup({
      // name: new FormControl('', Validators.required),
      name: new FormControl(''),
      email: new FormControl(""),
      password: new FormControl(""),
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.userForm.value;
    console.log(submitData);

    try {
      this.userService.addUser(submitData).subscribe((data) => {
        console.log(data); 
      })
    } catch (error) {
      return error
    }
    this.showSuccess()
    this.router.navigateByUrl('/signin');
  }

  showSuccess() {
    this.toastr.success('Bạn đã đăng kí thành công, hãy đăng nhập bằng tài khoản vừa rồi bạn đã đăng kí');
  }

}
