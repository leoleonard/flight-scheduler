import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IFlight} from 'src/app/models/flight.interface';
import {FlightsService} from './services/flights.service';
import {RegistrationsService} from './services/registrations.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        '../assets/css/reset.css',
        '../assets/css/fonts.css'
    ]
})
export class AppComponent implements OnInit {
    constructor(private flightsService: FlightsService, private registrationsService: RegistrationsService) {}

    public data: Array<IFlight> = [];
    public registrations: string[] = [];

    ngOnInit() {
        this.getFlights();
        this.getRegistrations();
    }

    private getFlights() {
        this.flightsService.allFlights().subscribe(flights => {
            this.data = flights;
        });
    }

    private getRegistrations() {
        this.registrationsService.allRegistrations().subscribe(registrations => this.registrations = registrations);
    }
}
