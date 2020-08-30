import { Injectable } from '@angular/core';
import {IHeroMember} from '../interfaces/ihero-member';
import {HERO_MEMBERS} from '../data/hero-data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  members: IHeroMember[] = [];

  constructor() { 
    this.members = HERO_MEMBERS;
  }

  getMembers(): IHeroMember[] {
    return this.members;
  }
}
