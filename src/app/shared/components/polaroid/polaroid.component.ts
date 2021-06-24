import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ameh-polaroid",
  templateUrl: "./polaroid.component.html",
  styleUrls: ["./polaroid.component.scss"],
})
export class PolaroidComponent implements OnInit {
  @Input() imgSrc!: string;

  @Input() caption: string | undefined;

  @Input() size: "sm" | "md" | "lg" = "md";

  constructor() {}

  ngOnInit(): void {}
}
