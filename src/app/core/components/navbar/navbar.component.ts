import { Component, OnInit } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { map, sampleTime, startWith } from "rxjs/operators";

@Component({
  selector: "ameh-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public isOnTop$: Observable<boolean> = fromEvent(window, "scroll").pipe(
    startWith(true),
    sampleTime(300),
    map(() => window.scrollY === 0)
  );

  constructor() {}

  ngOnInit(): void {}
}
