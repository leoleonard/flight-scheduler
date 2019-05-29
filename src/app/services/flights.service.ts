import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import { Http } from '@angular/http';

const API_URL = 'http://localhost:3000/flights/';

@Injectable()
export class FlightsService {
    constructor(private http: Http) {}

    flightsList() {
        return this.http.get(API_URL).pipe(map(res => {
            return res.json().map(flight => {
                const {
                    id,
                    FlightNumber: flightNumber,
                    DateTime: scheduledDate,
                    'Origin/Destination': originDestination,
                    Registration: registration,
                } = flight;

                return {
                    id,
                    flightNumber,
                    scheduledDate,
                    originDestination,
                    registration,
                };
            });
        }));
    }
}
