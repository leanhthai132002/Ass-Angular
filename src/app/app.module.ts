import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailClientComponent } from './pages/book-detail-client/book-detail-client.component';
import { BookDetailAdminComponent } from './pages/admin/book-detail-admin/book-detail-admin.component';
import { BookFormAdminComponent } from './pages/admin/book-form-admin/book-form-admin.component';
import { BookListAdminComponent } from './pages/admin/book-list-admin/book-list-admin.component';
import { SignInClientComponent } from './pages/login-client/sign-in-client/sign-in-client.component';
import { SignUpClientComponent } from './pages/login-client/sign-up-client/sign-up-client.component';
import { CartClientComponent } from './pages/cart-client/cart-client.component';

// Import thư viện này để sử dụng Form
import { FormsModule } from '@angular/forms';
// Import thư viện ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { UserListAdminComponent } from './pages/user-list-admin/user-list-admin.component';

// toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    BookDetailClientComponent,
    BookDetailAdminComponent,
    BookFormAdminComponent,
    BookListAdminComponent,
    SignInClientComponent,
    SignUpClientComponent,
    CartClientComponent,
    CartComponent,
    UserListAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Đưa vào đây để FormComponent bên trên có thể dùng
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
