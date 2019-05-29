import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import { IFlight } from 'src/app/models/flight.interface';
import {FlightsService} from '../../services/flights.service';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';

@Component({
    selector: 'data-grid',
    templateUrl: './data-grid.component.html',
    styleUrls: ['./data-grid.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class DataGridComponent {
    constructor(private flightService: FlightsService) {}

    @Input() public rows: Array<IFlight>;
    @Input() public registrationRows: string[];
    @Output() load = new EventEmitter();
    @Output() save = new EventEmitter();

    public display = false;
    public flightRegistration: string;
    public sampleHeaders = ['flight', 'sch. date', 'sch.time', 'o/d', 'registration'];
    public selectedFlight: IFlight = {
        id: '',
        flightNumber: '',
        scheduledDate: new Date(0),
        originDestination: '',
        registration: '',
    };
    public suggestionsList: any[];


    openDialog(): void {
        this.display = true;
    }

    closeDialog(): void {
        this.display = false;
        this.flightRegistration = '';
    }

    selectFlight(flight: IFlight): void {
        this.selectedFlight = flight;
    }

    register(flight: IFlight): void {
        this.openDialog();
        this.selectFlight(flight);
        this.flightRegistration = flight.registration;
    }

    saveRegistration() {
        const flight = Object.assign({}, this.selectedFlight, { registration: this.flightRegistration });
        this.save.emit(flight);
        this.closeDialog();
    }

    findRegistration(event, registrations: any[]): void {
        const { query } = event;
        const registrationsList: string[] = [];

        for (let i = 0; i < registrations.length; i++) {
            const registration = registrations[i];
            if (registration.id.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                registrationsList.push(registration.id);
            }
        }

        this.suggestionsList = registrationsList;
    }
}
