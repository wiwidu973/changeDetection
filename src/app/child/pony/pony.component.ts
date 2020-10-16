import { Component, Input, OnInit,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ColorService } from '../../color.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush
})



export class PonyComponent implements OnInit {

@Input() ponyModel;

  public color$: Observable<string>

  constructor(
    private colorService:ColorService,
    private changeDetector : ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.color$=this.colorService.get();
  }
  public check() {
    console.log('pony component view checked');
    this.changeDetector.detectChanges()
  }



}

