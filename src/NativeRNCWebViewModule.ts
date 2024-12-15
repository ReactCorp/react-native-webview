import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  isFileUploadSupported(): Promise<boolean>;
  shouldStartLoadWithLockIdentifier(
    shouldStart: boolean,
    lockIdentifier: Double
  ): void;

  clearPreservedWebViewInstances: () => void;
  releasePreservedWebViewInstance: (webViewKey: string) => void;
  isWebViewInstancePreserved: (webViewKey: string) => Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNCWebViewModule');
