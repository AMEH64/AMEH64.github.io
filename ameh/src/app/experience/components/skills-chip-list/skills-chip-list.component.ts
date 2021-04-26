import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ameh-skills-chip-list',
  templateUrl: './skills-chip-list.component.html',
  styleUrls: ['./skills-chip-list.component.scss']
})
export class SkillsChipListComponent implements OnInit {
  @Input() skills!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }
}
