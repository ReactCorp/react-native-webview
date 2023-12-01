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

const pauseWebView = function pauseWebView(webViewKey: string) {
    NativeModules.RNCWebView.pauseWebView(webViewKey);
}

const resumeWebView = function resumeWebView(webViewKey: string) {
    NativeModules.RNCWebView.resumeWebView(webViewKey);
}

export { isPreservedWebView, releaseWebView, clearWebViews, pauseWebView, resumeWebView };
