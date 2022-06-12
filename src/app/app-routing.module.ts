import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { BookDetailAdminComponent } from './pages/admin/book-detail-admin/book-detail-admin.component';
import { BookFormAdminComponent } from './pages/admin/book-form-admin/book-form-admin.component';
import { BookListAdminComponent } from './pages/admin/book-list-admin/book-list-admin.component';
import { BookDetailClientComponent } from './pages/book-detail-client/book-detail-client.component';
import { CartClientComponent } from './pages/cart-client/cart-client.component';
import { SignInClientComponent } from './pages/login-client/sign-in-client/sign-in-client.component';
import { SignUpClientComponent } from './pages/login-client/sign-up-client/sign-up-client.component';
import { UserListAdminComponent } from './pages/user-list-admin/user-list-admin.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    // children:[
    //   {
    //     path:'books',
    //     children:[
    //       {
    //         path: ':id',
    //         component: BookDetailClientComponent
    //       },
    //     ] 
    //   },
    // ],
  },
  {
    path: 'cart',
    component:CartClientComponent,
  },

{
  path: 'books/:id',
  component: BookDetailClientComponent,
},


  {
    path:'signin',
    component: SignInClientComponent
  },
  {
    path:'signup',
    component: SignUpClientComponent
  },
  {
  path: 'admin',
  component: AdminLayoutComponent,
  canActivate: [CanAccessAdminGuard],
  
  children: [
    {
      path: 'users',
      component: UserListAdminComponent
    },
    {
      path: 'books',
      children: [
        {
          path: '',
          component: BookListAdminComponent
        },
        {
          path: 'create',
          component: BookFormAdminComponent
        },
        {
          path: 'edit/:id',
          component: BookFormAdminComponent
        },
        {
          path: ':id',
          component: BookDetailAdminComponent
        },
      ]
    }
  ]
},
{
  path: 'auth',
  children: [
    {
      path: 'login',
      component: SignInClientComponent
    }
  ]
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] 
})
export class AppRoutingModule { }
