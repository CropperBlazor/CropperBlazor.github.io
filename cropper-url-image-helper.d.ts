declare namespace CropperBlazor$1.Helpers {
	class CropperUrlImageHelper {
		getImageUsingStreaming(imageStream: CropperBlazor.Global.DotNetStreamReference): Promise<string>;
		revokeObjectUrl(url: string): void;
	}
}
declare namespace CropperBlazor.Global {
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
export {
	CropperBlazor$1 as CropperBlazor,
};
