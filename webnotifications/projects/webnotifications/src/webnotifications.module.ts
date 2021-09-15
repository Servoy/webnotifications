import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { WebNotificationsService } from './webnotifications';
import { WindowRefService } from '@servoy/public';
import { ToastrModule, ToastrService } from '@servoy/ngx-toastr';
import { ServoyToastrService } from './toastr';

@NgModule({
    declarations: [],
    providers: [WindowRefService, WebNotificationsService, ServoyToastrService, ToastrService],
    imports: [
        CommonModule,
        ServoyPublicModule,
        ToastrModule.forRoot()
    ],
    exports: []
})
export class WebNotificationsModule {}
