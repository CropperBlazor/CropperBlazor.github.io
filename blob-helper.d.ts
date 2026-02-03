declare namespace CropperBlazor$1.Global {
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
declare namespace CropperBlazor$2.Helpers {
	function readBlobInChunks(blob: Blob | null, dotNetImageReceiverRef: CropperBlazor$1.Global.DotNetObjectReference<CropperBlazor.Components.ImageReceiver> | null, maximumReceiveChunkSize?: number): Promise<void>;
}
declare namespace CropperBlazor.Components {
	
	export interface ImageReceiver {
		
		HandleImageProcessingError(errorMessage: string): void;
		
		ReceiveImageChunk(chunk: Uint8Array): Promise<void>;
		
		CompleteImageTransfer(): void;
	}
}
export {
	CropperBlazor$2 as CropperBlazor,
};
