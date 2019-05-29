import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

const API_URL = 'http://localhost:3000/registrations/';

@Injectable()
export class RegistrationsService {

  constructor(private http: Http) {}

    flightsRegistrations() {
        return this.http.get(API_URL).pipe(map(res => {
            return res.json();
        }));
    }
}
