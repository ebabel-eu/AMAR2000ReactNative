# AMAR2000 React Native

iOS and Android app to monitor the environment data of an office and alerts when parameters enter unhealthy ranges.

## Install

### iOS

- Open ./ios/AMAR2000ReactNative.xcodeproj with XCode
- Make sure there's a target virtual device started or connect a real device
- Press Play

## Development

Edit code starting with index.ios.js, then press Cmd R to reload and see your changes.

For the dev menu, press Cmd Ctrl Z

Alternative to see changes automatically: in Cmd Ctrl Z, enable Live Reload.

## Team

- Nadjib Amar (React Native developer)
- Vincent van den Heuvel (Designer)
- Wessel Terpstra (Backend web API developer)
- Alex Schouls (Backend web API developer)

## Visual Studio Code setup [optional]

In your settings.json (User Settings), the following can be set to lint this project inline:

```
{
  "jshint.enable": false,
  "eslint.enable": true,
  "editor.tabSize": 2
}
```

You will also need to install the following plugins (on MacOS, View > Command Palette):

```
ext install eslint
```

Optionally, since this project is Wallaby enabled, you can install it:

```
ext install wallaby
```

## Release history

### v1.0.0 First release for iOS (future release)
- initial Hackaton version for iOS, Android will come later
