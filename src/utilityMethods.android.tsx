import { NativeModules } from 'react-native';

const isPreservedWebView = function isPreservedWebView(webViewKey: string): Promise<boolean> {
    return NativeModules.RNCWebView.isWebViewInstancePreserved(webViewKey);
}

const releaseWebView = function releaseWebView(webViewKey: string) {
    NativeModules.RNCWebView.releasePreservedWebViewInstance(webViewKey);
}

const clearWebViews = function clearWebViews() {
    NativeModules.RNCWebView.clearPreservedWebViewInstances();
}

export { isPreservedWebView, releaseWebView, clearWebViews };
