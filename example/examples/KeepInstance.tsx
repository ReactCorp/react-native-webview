import React from 'react';
import { View, Button } from 'react-native';

import WebView, { clearPreservedWebViewInstances } from 'react-native-webview';

const KeepInstance: React.FC = () => {
  const [webViewKey, setWebViewKey] = React.useState<string>("key1");
  const webViewRef = React.useRef<WebView>(null);

  return (
    <View style={{ height: '100%' }}>
      <View style={{ flexDirection: 'row' }}>
      <Button title="Show key1" onPress={() => { setWebViewKey("key1") }} />
      <Button title="Show key2" onPress={() => { setWebViewKey("key2") }} />
      </View>
      {/* <View style={{ flexDirection: 'row' }}> */}
      <Button
        title="Clear all instances"
        onPress={() => clearPreservedWebViewInstances()}
      />
      <Button
        title="Release Instance"
        onPress={() => releasePreservedWebViewInstance(webViewKey)}
      />
      <Button
        title="Check Instance"
        onPress={() =>
          console.log('status: ' + isWebViewInstancePreserved(webViewKey))
        }
      />
      <Button
        title="Check isFileUploadSupported"
        onPress={async () => console.log(await isFileUploadSupported())}
      />
      <Button
        title="Check isFileUploadSupported *"
        onPress={async () =>
          console.log(await webViewRef.current?.isFileUploadSupported())
        }
      />
      {/* </View> */}
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://google.com/',
          keepWebViewInstanceAfterUnmount: true,
          webViewKey: webViewKey,
        }}
      />
    </View>
  );
};

export default KeepInstance;
