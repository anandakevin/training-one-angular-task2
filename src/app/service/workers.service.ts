import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Worker } from '../model/workers';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  private workersUrl: string = 'http://localhost:3005/freelancers';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workersUrl);
  }

  getWorker(id: number): Observable<Worker> {
    //--> http://localhost:3005/freelancers/5
    const urlByID = `${this.workersUrl}/${id}`;
    return this.http.get<Worker>(urlByID); //
  }

  /**
   * Add hero service
   */
  addHeroService(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.workersUrl, worker, this.httpOptions);
  }

  deleteHeroService(id: number): Observable<Worker> {
    return this.http.delete<Worker>(this.workersUrl, id);
  }
}