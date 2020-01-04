import { UserJson } from './models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService {
    public usersUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<UserJson[]>(this.usersUrl + `/users`);
    }

    public getById(id: number) {
        return this.http.get(this.usersUrl + `/users/` + id);
    }

    public register(user: UserJson) {
        return this.http.post(this.usersUrl + `/users`, user);
    }

    public update(user: UserJson) {
        return this.http.put(this.usersUrl + `/users/` + user.id, user);
    }

    public delete(id: number) {
        return this.http.delete(this.usersUrl + `/users/` + id);
    }

    public patch(id: number, user: UserJson) {
        return this.http.patch(this.usersUrl + `/users/` + id, user);
    }
}