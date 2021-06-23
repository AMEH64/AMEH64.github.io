import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';

import { Experience, Position } from '../models';

@Injectable()
export class ExperienceService {
  private _experiences: BehaviorSubject<Experience[]> = new BehaviorSubject<Experience[]>([]);

  public experiences$: Observable<Experience[]> = this._experiences.asObservable();

  constructor(private http: HttpClient) {}

  public getExperiences(): void {
    this.http.get('assets/data/experiences.json').subscribe(
      (response: any) => {
        const { experiences: experiencesData = [] } = response;
        const experiences: Experience[] = experiencesData.map((experienceData: any) => {
          const {
            organization,
            position: { start: positionStart, end: positionEnd, ...positionEtc }
          } = experienceData;
          return {
            organization,
            position: {
              start: new Date(positionStart),
              end: !!positionEnd ? new Date(positionEnd) : null,
              ...positionEtc
            }
          } as Experience;
        });

        this._experiences.next(experiences);
      },
      (err) => console.error(err)
    );
  }
}
