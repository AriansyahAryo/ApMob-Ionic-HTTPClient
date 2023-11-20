import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiTutorial {
  Hasil: any;
  Statys: any;
}
@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getTutorial(): Observable<ApiTutorial> {
    return this.http.get<ApiTutorial>('http://localhost/ionic/index.php');
  }

  getDetailTutorial() {}
}
