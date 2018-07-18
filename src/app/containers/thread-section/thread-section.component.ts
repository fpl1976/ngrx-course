import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AllUserData } from 'shared/aggregates/all-user-data';
import * as fromStore from '../../store';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss']
})
export class ThreadSectionComponent implements OnInit {

  public threads$: Observable<AllUserData>;

  constructor(
    private store: Store<fromStore.ApplicationState>) { }

  ngOnInit() {
    // Create selector for user threads and assign to thread$ observable
    // this.threads$ = this.store.select();
    // Dispatch load user threads
    this.store.dispatch(new fromStore.LoadUserThreads());
  }

}
