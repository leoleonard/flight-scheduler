import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IFlight } from 'src/app/models/flight.interface';

@Component({
  selector: 'data-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
    @Input() row: IFlight;
    @Output() registrationModal = new EventEmitter();
}
