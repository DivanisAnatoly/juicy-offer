import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Ad {
  title: string;
  description: string;
}

@Component({
  selector: 'app-adds-list',
  templateUrl: './adds-list.component.html',
})
export class AddsListComponent implements OnInit {

  superForm!: FormGroup;

  @Input()
  childAds!: Ad[];

  @Output() onDeleteClicked: EventEmitter<number> = new EventEmitter();
  @Output() onAddClicked: EventEmitter<Ad> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.superForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required])
    });
  }

  deleteAd(index: number) {
    this.onDeleteClicked.emit(index);
  }

  addAd() {
    const ad: Ad = {
      title: this.superForm.controls.title.value,
      description: this.superForm.controls.description.value
    };

    this.onAddClicked.emit(ad);

    this.superForm.reset();
  }
}
