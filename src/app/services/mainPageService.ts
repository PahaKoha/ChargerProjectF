import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor(private http: HttpClient) {
  }

  getInfo(): Observable<any> {
    return this.http.get('http://localhost:8080/lock')
  }
}
