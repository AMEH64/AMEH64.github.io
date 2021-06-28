import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ameh-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  public icons: string[] = [
    "devicon-angularjs-plain",
    "devicon-bootstrap-plain",
    "devicon-csharp-plain",
    "devicon-css3-plain",
    "devicon-dot-net-plain",
    "devicon-dotnetcore-plain",
    "devicon-git-plain",
    "devicon-git-plain",
    "devicon-html5-plain",
    "devicon-jasmine-plain",
    "devicon-javascript-plain",
    "devicon-jquery-plain",
    "devicon-karma-plain",
    "devicon-nodejs-plain",
    "devicon-npm-original-wordmark",
    "devicon-sass-original",
    "devicon-microsoftsqlserver-plain",
    "devicon-tailwindcss-plain",
    "devicon-typescript-plain",
    "devicon-visualstudio-plain",
    "devicon-vscode-plain",
  ];

  constructor() {}

  ngOnInit(): void {}
}
