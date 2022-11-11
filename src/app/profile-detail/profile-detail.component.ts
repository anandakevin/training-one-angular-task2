import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Worker } from '../model/workers';
import { WorkersService } from '../service/workers.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  worker: Worker | undefined;

  constructor(
    private workersService: WorkersService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWorker();
  }

  getWorker(): void {
    const paramId = Number(this.route.snapshot.paramMap.get('id'));
    this.workersService
      .getWorker(paramId)
      .subscribe((response) => (this.worker = response));
  }

  goBack(): void {
    this.location.back();
  }
}
