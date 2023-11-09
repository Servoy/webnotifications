import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Toast, ToastrService, ToastPackage, IndividualConfig } from '@servoy/ngx-toastr';

// Check https://gist.github.com/Eonasdan/db173d060cb98abf3eb031c078a1329c
export interface ServoyIndividualConfig extends IndividualConfig {
	actionButtonText: string;
}

// @Component from https://github.com/scttcper/ngx-toastr/blob/master/src/lib/toastr/toast.component.ts#L20

@Component({
  selector: '[toast-component]',
  template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div class="toast-action-button" (click)="clickAction($event)" [innerHTML]="options.actionButtonText ? options.actionButtonText: actionButtonText">
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
  animations: [
    trigger('flyInOut', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition('inactive => active', animate('{{ easeTime }}ms {{ easing }}')),
      transition('active => removed', animate('{{ easeTime }}ms {{ easing }}')),
    ]),
  ],
  preserveWhitespaces: false,
  standalone: true,
  imports: [NgIf],
})
export class ServoyToast extends Toast {

  // default actionButtonText
  actionButtonText = '<span class="btn btn-default">Click Me!</span>';
  // extend IndividualConfigOption 
  options: ServoyIndividualConfig;

  // constructor is only necessary when not using AoT
  constructor(
   	protected toastrService: ToastrService,
    public toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
  }


 clickAction(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction('action');
  }
}