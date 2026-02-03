import Cropper from 'cropperjs';
declare global {
	interface Window {
		cropper: CropperDecorator;
		cropperUrlImageHelper: CropperBlazor$8.Helpers.CropperUrlImageHelper;
	}
}
declare namespace CropperBlazor$1.Components {
	
	export interface CroppedCanvasReceiver {
		
		ReceiveCanvasReference(canvasRef: HTMLCanvasElement): void;
	}
}
declare namespace CropperBlazor$2.Components {
	
	export interface ImageReceiver {
		
		HandleImageProcessingError(errorMessage: string): void;
		
		ReceiveImageChunk(chunk: Uint8Array): Promise<void>;
		
		CompleteImageTransfer(): void;
	}
}
declare namespace CropperBlazor$3.Global {
	interface DotNetNamespace {
		invokeMethodAsync<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): Promise<T>;
		createJSObjectReference(jsObject: any): JsObjectReference;
	}
	interface DotNetStreamReference {
		arrayBuffer(): Promise<ArrayBuffer>;
	}
	interface DotNetObjectReference<T> {
		invokeMethodAsync(methodName: keyof T, ...args: any[]): Promise<any>;
	}
	interface JsObjectReference {
		__jsObjectId: number;
	}
}
declare namespace CropperBlazor$4.Data {
	type CropEventDataJS = {
		action: string;
		originalEvent: CropperBlazor$3.Global.JsObjectReference | null;
	};
}
declare namespace CropperBlazor$5.Data {
	type ZoomEventDataJS = {
		oldRatio: number;
		ratio: number;
		originalEvent: CropperBlazor$3.Global.JsObjectReference | null;
	};
}
declare namespace CropperBlazor$6.Data {
	type CropperEventDataJS = CropperBlazor$4.Data.CropEventDataJS | CropperBlazor$5.Data.ZoomEventDataJS;
	type CropperJSEventData = {
		isTrusted: boolean;
		detail: CropperEventDataJS;
		type: string;
		eventPhase: number;
		bubbles: boolean;
		cancelable: boolean;
		defaultPrevented: boolean;
		composed: boolean;
		timeStamp: number;
		returnValue: any;
		cancelBubble: boolean;
		correlationId?: string;
	};
}
declare namespace CropperBlazor$7.Data {
	type CropperExtendedOptions<T extends EventTarget = HTMLImageElement | HTMLCanvasElement> = Cropper.Options<T> & {
		correlationId?: string;
	};
}
declare namespace CropperBlazor$8.Helpers {
	class CropperUrlImageHelper {
		getImageUsingStreaming(imageStream: CropperBlazor$3.Global.DotNetStreamReference): Promise<string>;
		revokeObjectUrl(url: string): void;
	}
}
declare namespace CropperBlazor.Components {
	
	export interface ICropperComponentBase {
		
		IsReady(eventData: Cropper.CropEventData | Cropper.ZoomEventData): void;
		
		CropperIsStarted(eventData: Cropper.CropEventData): void;
		
		CropperIsMoved(eventData: Cropper.CropEventData): void;
		
		CropperIsEnded(eventData: Cropper.CropEventData): void;
		
		CropperIsCroped(eventData: Cropper.CropEventData): void;
		
		CropperIsZoomed(eventData: Cropper.ZoomEventData): void;
	}
}
export declare class CropperDecorator {
	private cropperInstances;
	clear(id: CropperId): Cropper;
	crop(id: CropperId): Cropper;
	destroy(id: CropperId): void;
	disable(id: CropperId): Cropper;
	enable(id: CropperId): Cropper;
	getCanvasData(id: CropperId): Cropper.CanvasData;
	getContainerData(id: CropperId): Cropper.ContainerData;
	getCropBoxData(id: CropperId): Cropper.CropBoxData;
	getCroppedCanvas(id: CropperId, options: Cropper.GetCroppedCanvasOptions): HTMLCanvasElement;
	getCroppedCanvasInBackground(id: CropperId, options: Cropper.GetCroppedCanvasOptions, dotNetCanvasReceiverRef: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor$1.Components.CroppedCanvasReceiver>): Promise<void>;
	getCroppedCanvasDataURL(id: CropperId, options: Cropper.GetCroppedCanvasOptions, type?: string, encoderOptions?: number): string;
	getData(id: CropperId, rounded?: boolean): Cropper.Data;
	getImageData(id: CropperId): Cropper.ImageData;
	move(id: CropperId, offsetX: number, offsetY: number): Cropper;
	moveTo(id: CropperId, x: number, y: number): Cropper;
	replace(id: CropperId, url: string, onlyColorChanged?: boolean): Cropper;
	reset(id: CropperId): Cropper;
	rotate(id: CropperId, degree: number): Cropper;
	rotateTo(id: CropperId, degree: number): Cropper;
	scale(id: CropperId, x: number, y: number): Cropper;
	scaleX(id: CropperId, x: number): Cropper;
	scaleY(id: CropperId, y: number): Cropper;
	setAspectRatio(id: CropperId, ratio: number): Cropper;
	setCanvasData(id: CropperId, data: Cropper.CanvasData): Cropper;
	setCropBoxData(id: CropperId, data: Cropper.SetCropBoxDataOptions): Cropper;
	setData(id: CropperId, data: Cropper.Data): Cropper;
	setDragMode(id: CropperId, mode: Cropper.DragMode): Cropper;
	zoom(id: CropperId, ratio: number): Cropper;
	zoomTo(id: CropperId, ratio: number, pivotX: number, pivotY: number): Cropper;
	noConflict(): Cropper;
	setDefaults(options: Cropper.Options): void;
	getJSEventData<T extends EventTarget>(instance: Cropper.CropperEvent<T> | Cropper.CropEvent<T> | Cropper.CropStartEvent<T> | Cropper.CropMoveEvent<T> | Cropper.CropEndEvent<T>, correlationId: string | undefined): CropperBlazor$6.Data.CropperJSEventData;
	getJSEventDataDetail<T extends EventTarget>(instance: Cropper.CropperEvent<T> | Cropper.CropEvent<T> | Cropper.CropStartEvent<T> | Cropper.CropMoveEvent<T> | Cropper.CropEndEvent<T>): CropperBlazor$6.Data.CropperEventDataJS;
	onReady(imageObject: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>, e: Cropper.ReadyEvent<HTMLImageElement | HTMLCanvasElement>, id: string | undefined): void;
	onCropStart(imageObject: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>, e: Cropper.CropStartEvent<HTMLImageElement | HTMLCanvasElement>, id: string | undefined): void;
	onCropMove(imageObject: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>, e: Cropper.CropMoveEvent<HTMLImageElement | HTMLCanvasElement>, id: string | undefined): void;
	onCropEnd(imageObject: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>, e: Cropper.CropEndEvent<HTMLImageElement | HTMLCanvasElement>, id: string | undefined): void;
	onCrop(imageObject: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>, e: Cropper.CropEvent<HTMLImageElement | HTMLCanvasElement>, id: string | undefined): void;
	onZoom(imageObject: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>, e: Cropper.ZoomEvent<HTMLImageElement | HTMLCanvasElement>, id: string | undefined): void;
	initCropper(id: CropperId, image: HTMLImageElement | HTMLCanvasElement, optionsImage: CropperBlazor$7.Data.CropperExtendedOptions, imageObject?: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor.Components.ICropperComponentBase>): void;
	readBlobInChunks(blob: Blob | null, dotNetImageReceiverRef: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor$2.Components.ImageReceiver>, maximumReceiveChunkSize?: number): Promise<void>;
	sendImageInChunks(cropperComponentId: CropperId, options: Cropper.GetCroppedCanvasOptions, dotNetImageReceiverRef: CropperBlazor$3.Global.DotNetObjectReference<CropperBlazor$2.Components.ImageReceiver>, type?: string, encoderOptions?: number, maximumReceiveChunkSize?: number): void;
}
export type CropperId = string;
