import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {IHeroMember} from './interfaces/ihero-member';
  import { from } from 'rxjs';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'alias', 'currentMember', 'powers'];
  dataSource: MatTableDataSource<IHeroMember>;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.heroService.getMembers());
  }
}

