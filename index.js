import WebView from './lib/WebView';
import RNCWebViewModule from './NativeRNCWebViewModule';

const {
  isFileUploadSupported,
  clearPreservedWebViewInstances,
  releasePreservedWebViewInstance,
  isWebViewInstancePreserved,
} = RNCWebViewModule;

export {
  WebView,
  isFileUploadSupported,
  clearPreservedWebViewInstances,
  releasePreservedWebViewInstance,
  isWebViewInstancePreserved,
};
export default WebView;
