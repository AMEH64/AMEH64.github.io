import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ameh-polaroid",
  templateUrl: "./polaroid.component.html",
  styleUrls: ["./polaroid.component.scss"],
})
export class PolaroidComponent implements OnInit {
  @Input() imgSrc!: string;

  @Input() altText!: string;

  @Input() caption!: string;

  constructor() {}

  ngOnInit(): void {}
}
