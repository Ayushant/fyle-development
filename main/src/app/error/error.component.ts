import { Component, Input, OnInit } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() error!: string;

  errorIcon = faExclamation;

  constructor() {}

  ngOnInit(): void {}
}
