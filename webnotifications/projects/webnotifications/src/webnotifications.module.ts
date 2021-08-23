import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServoyPublicModule } from '@servoy/public';
import { WebNotificationsService } from './webnotifications';
import { WindowRefService } from '@servoy/public';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServoyToastrService } from './toastr';

@NgModule({
    declarations: [],
    providers: [WindowRefService, WebNotificationsService, ServoyToastrService],
    imports: [
        BrowserModule,
        CommonModule,
        ServoyPublicModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],
    exports: []
})
export class WebNotificationsModule {}
