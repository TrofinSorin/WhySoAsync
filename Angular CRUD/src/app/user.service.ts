import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    public usersUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<User[]>(this.usersUrl + '/users');
    }

    public getOneById(id: number) {
        return this.http.get(this.usersUrl + '/users/' + id);
    }

    public create(user: User) {
        return this.http.post(this.usersUrl + '/users/', user);
    }

    public update(user: User) {
        return this.http.put(this.usersUrl + '/users/' + user.id, user);
    }

    public delete(id: number) {
        return this.http.delete(this.usersUrl + '/users/' + id);
    }

    public patch(id: number, user: User) {
        return this.http.patch(this.usersUrl + '/users/' + id, user);
    }
}
