import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LoadUserThreads } from '../store/actions/user-threads.actions';
import { AllUserData } from 'shared/aggregates/all-user-data';
import { ApplicationState } from '../store/reducers';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss']
})
export class ThreadSectionComponent implements OnInit {

  public threads$: Observable<AllUserData>;

  constructor(
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    // Create selector for user threads and assign to thread$ observable
    // Dispatch load user threads
    this.store.dispatch(new LoadUserThreads());
  }

}
