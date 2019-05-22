import { Component, ViewEncapsulation } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [
        "../assets/css/reset.css",
        "../assets/css/fonts.css"
  ]
})
export class AppComponent {
    public data: Array<IFlight> = [];
}
