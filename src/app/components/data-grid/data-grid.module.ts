import { NgModule } from '@angular/core';

import { DataGridComponent } from './data-grid.component';
import { GridHeaderModule } from './header/header.module';
import { RowModule } from './row/row.module';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';
import {RegistrationsService} from '../../services/registrations.service';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/primeng';

@NgModule({
    declarations: [DataGridComponent],
    exports: [DataGridComponent],
    imports: [
        GridHeaderModule,
        RowModule,
        CommonModule,
        DialogModule,
        ButtonModule,
        AutoCompleteModule,
        BrowserAnimationsModule,
        FormsModule,
    ],
    providers: [FlightsService, RegistrationsService],
})
export class DataGridModule {}
