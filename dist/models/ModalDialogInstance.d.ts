import { ComponentRef } from 'angular2/core';
import { ModalConfig } from '../models/ModalConfig';
/**
 * API to an open modal window.
 */
export declare class ModalDialogInstance {
    config: ModalConfig;
    contentRef: ComponentRef;
    /**
     * States if the modal is inside a specific element.
     */
    inElement: boolean;
    private _bootstrapRef;
    private _backdropRef;
    private _resultDefered;
    constructor(config: ModalConfig);
    backdropRef: ComponentRef;
    bootstrapRef: ComponentRef;
    /**
     * A Promise that is resolved on a close event and rejected on a dismiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    result: Promise<any>;
    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result?: any): void;
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    dismiss(): void;
    private dispose();
}
