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
  paramId = Number(this.route.snapshot.paramMap.get('id'));
  worker: Worker | undefined;

  constructor(
    private workersService: WorkersService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.getWorker();
  }

  ngOnInit(): void {}

  getWorker(): void {
    this.workersService
      .getWorker(this.paramId)
      .subscribe((response) => (this.worker = response));
  }

  delete() {
    this.workersService.deleteHeroService(this.paramId);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
