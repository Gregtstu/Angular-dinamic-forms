import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IUser} from "../interfaces/iuser";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // https://calculator-c3c22-default-rtdb.firebaseio.com/

  post(obj:IUser):Observable<IUser>{
    return this.http.post<IUser>('https://calculator-c3c22-default-rtdb.firebaseio.com/users.json', obj)
      .pipe(map ((res:IUser) => {
          return {
            ...obj,
            id: res.nameUser,
          }
        })
      );
  }

  getAll():Observable<IUser[]>{
    return this.http.get<IUser[]>('https://calculator-c3c22-default-rtdb.firebaseio.com/users.json')
      .pipe( map ( res => {

        return Object.keys(res)
          .map( (key:any) => ({
            ...res[key],
            id: key,
          }))
      }))
  }

  delete( id:string):Observable<IUser>{
    return this.http.delete<IUser>(`https://calculator-c3c22-default-rtdb.firebaseio.com/users/${id}.json`);
  }

  put(obj:IUser, id:string | undefined):Observable<IUser>{
    return this.http.put<IUser>(`https://calculator-c3c22-default-rtdb.firebaseio.com/users/${id}.json`, obj)
      .pipe(map (res => {
          return {
            ...obj,
            id: res.nameUser,
          }
        })
      );
  }
}
