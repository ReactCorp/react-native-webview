import React from 'react';
import { View, Text, Button, Alert, Switch } from 'react-native';

import WebView, {
  clearPreservedWebViewInstances,
  releasePreservedWebViewInstance,
  isWebViewInstancePreserved,
} from 'react-native-webview';

const KEY_WEBVIEW = 'keep-instance-key';

const KeepInstance: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(true);
  const webViewRef = React.useRef<WebView>(null);

  const onSwitchChanged = React.useCallback(
    (value: boolean) => {
      setVisible(value);
    },
    [setVisible]
  );

  return (
    <View style={{ height: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>WebView visible:</Text>
        <Switch value={visible} onValueChange={onSwitchChanged} />
      </View>
      <Button
        title="Clear all instances"
        onPress={() => clearPreservedWebViewInstances()}
      />
      <Button
        title="Release Instance"
        onPress={() => releasePreservedWebViewInstance(KEY_WEBVIEW)}
      />
      <Button
        title="Check Instance"
        onPress={async () => {
          const status = await isWebViewInstancePreserved(KEY_WEBVIEW);
          Alert.alert(`Instance of ${KEY_WEBVIEW} status: ${status}`);
        }}
      />
      {visible && (
        <WebView
          ref={webViewRef}
          source={{
            uri: 'https://google.com/',
            keepWebViewInstanceAfterUnmount: true,
            webViewKey: KEY_WEBVIEW,
          }}
        />
      )}
    </View>
  );
};

export default KeepInstance;
