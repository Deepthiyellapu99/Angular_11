import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor( private http: HttpClient) { }

  uploadFile(req){

    
   return this.http.post('https://file.io', req)
    //  return this.http.get(environment.pendingPreFlight).pipe(
    //   map((res) => res),
    //   catchError((err) => of(err))
    // );
  }
}
