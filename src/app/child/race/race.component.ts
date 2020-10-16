import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent implements OnInit {

  ponies = [
    { id: 1, color: 'green' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'orange' },
  ];


  constructor() { }

  ngOnInit(): void {
  }
  check() {
    console.log('race component view checked');
  }



  }



