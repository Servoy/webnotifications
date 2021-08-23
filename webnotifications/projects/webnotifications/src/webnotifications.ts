import { ServoyPublicService, WindowRefService } from '@servoy/public';
import { Injectable } from '@angular/core';

@Injectable()
export class WebNotificationsService {

    constructor(private servoyService: ServoyPublicService, private windowRef: WindowRefService) {}

    public isSupported() {
        return 'Notification' in this.windowRef.nativeWindow;
    }

    /**
     * Requests permission to the user and executes the callback method when done
     *
     * @param callbackMethod
     */
    public requestPermission(callbackMethod: any) {
        if (!this.isSupported()) {
            throw new Error('Web Notification functionality is not supported by the browser!');
        }

        const permission = Notification.permission;
        if (permission === 'granted' || permission === 'denied') {
            this.servoyService.executeInlineScript(callbackMethod.formname, callbackMethod.script, [permission ===  'granted']);
            return;
        }

        Notification.requestPermission((status: string) => {
            this.servoyService.executeInlineScript(callbackMethod.formname, callbackMethod.script, [status ===  'granted']);
        });
    }

    /**
     * Returns the current permission value as defined by the Web Notifications API. It can contain the following values:
     * - default: implicitly denied
     * - denied: explicitly denied
     * - granted: explicitly granted
     */
    public getPermission() {
        if (!this.isSupported()) {
            throw new Error('Web Notification functionality is not supported by the browser!');
        }
        return Notification.permission;
    }

    /**
     * Returns whether or not the permission has been granted
     */
    public isPermitted() {
        if (!this.isSupported()) {
            throw new Error('Web Notification functionality is not supported by the browser!');
        }
        return Notification.permission === 'granted';
    }
    /**
     * Shows a notification
     *
     * @param title
     * @param body
     * @param icon URL to an icon image
     * @param image URL to a body image
     * @param tag unique identifier for the notification, will be generated if not supplied
     * @param onClickCallbackMethod this method will be called if the user clicks on the notification and will pass the tag as an argument
     *
     * @return value of the tag (as supplied or generated)
     */
    public show(title: string, body: string, icon: string, image: string, tag: string, onClickCallbackMethod: any) {
        if (!this.isSupported()) {
            throw new Error('Web Notification functionality is not supported by the browser!');
        }
        tag = tag || Date.now().toString();

        const options = {body, tag};
        if (icon) options['icon'] = icon;
        if (image) options['image'] = image;

        const notification = new Notification(title, options);

        if (onClickCallbackMethod) {
            notification.onclick = () => {
                this.servoyService.executeInlineScript(onClickCallbackMethod.formname, onClickCallbackMethod.script, [tag]);
            };
        }
        return tag;
    }
}
