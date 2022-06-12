import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User} from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // http sẽ cung cấp các phương thức để tương tác với API
  constructor(private http: HttpClient) { }

  // Observable sẽ cung cấp kiểu xử lý bất đồng bộ để phía component lắng nghe dữ liệu
  getUsers(): Observable<User[]>  {
    return this.http.get<User[]>(environment.users);
  }
  deleteUser(id: string|number): Observable<any> {
    return this.http.delete(`${environment.users}/${id}`);
  }
  addUser(user: User): Observable<any> {
    return this.http.post(environment.users, user);
  }
}
