import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';

import { Experience } from '../models';

@Injectable()
export class ExperienceService {
  private _experiences: BehaviorSubject<Experience[]> = new BehaviorSubject<Experience[]>([]);

  public experiences$: Observable<Experience[]> = this._experiences.asObservable();

  constructor(private http: HttpClient) { }

  public getExperiences(): void {
    this.http.get('assets/data/experiences.json').subscribe(response => {
      const experiences: Experience[] = (response as any[])?.map(experience => {
        const { organization, positions } = experience;
        return { organization, positions } as Experience;
      }) ?? [];

      this._experiences.next(experiences);
    }, err => console.error(err));
  }
}

