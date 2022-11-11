import { Component, OnInit } from '@angular/core';

import { Worker } from '../model/workers';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  workers: Worker[] = [];
  title: string = 'Dashboard';

  date = new Date();
  emptyData: string = 'empty data';

  constructor(private workerService: WorkersService) {}

  ngOnInit(): void {
    this.workers = [];
    this.getWorkers();
  }

  getWorkers(): void {
    this.workerService
      .getWorkers()
      .subscribe((response) => (this.workers = response));
  }
}
