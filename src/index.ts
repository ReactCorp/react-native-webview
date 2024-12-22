import WebView from './WebView';
import { NativeModules } from 'react-native';

// @ts-expect-error This applies the turbo module version only when turbo is enabled for backwards compatibility.
const isTurboModuleEnabled = global?.__turboModuleProxy != null;

const RNCWebViewModule = isTurboModuleEnabled
  ? require('./NativeRNCWebViewModule').default
  : NativeModules.RNCWebViewModule;

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
