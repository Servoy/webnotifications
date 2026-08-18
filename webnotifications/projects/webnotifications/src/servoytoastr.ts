import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';

import { Toast, ToastPackage, IndividualConfig } from '@servoy/ngx-toastr';

export interface ServoyIndividualConfig extends IndividualConfig {
	actionButtonText: string;
}

@Component({
    selector: '[toast-component]',
    template: `
  @let _options = svyOptions();
  @if (_options.closeButton) {
    <button (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  }
  @if (toastTitle()) {
    <div [class]="_options.titleClass" [attr.aria-label]="toastTitle()">
      {{ toastTitle() }} @if (duplicatesCount) {
      [{{ duplicatesCount + 1 }}]
    }
  </div>
  }
  @if (toastMessage() && _options.enableHtml) {
    <div role="alert"
      [class]="_options.messageClass" [innerHTML]="toastMessage()">
    </div>
  }
  @if (toastMessage() && !_options.enableHtml) {
    <div role="alert"
      [class]="_options.messageClass" [attr.aria-label]="toastMessage()">
      {{ toastMessage() }}
    </div>
  }
  <div class="toast-action-button" (click)="clickAction($event)" [innerHTML]="_options.actionButtonText ? _options.actionButtonText: actionButtonText">
  </div>
  @if (_options.progressBar) {
    <div>
      <div class="toast-progress" [style.width]="toastWidth() + '%'"></div>
    </div>
  }
  `,
    preserveWhitespaces: false,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export class ServoyToast extends Toast {

  actionButtonText = '<span class="btn btn-default">Click Me!</span>';
  private toastPkg = inject(ToastPackage);

  readonly svyOptions = computed(() => this.options() as ServoyIndividualConfig);
  readonly toastTitle = computed(() => this.title());
  readonly toastMessage = computed(() => this.message());
  readonly toastWidth = computed(() => this.width());

  clickAction(event: Event) {
    event.stopPropagation();
    this.toastPkg.triggerAction('action');
  }
}
