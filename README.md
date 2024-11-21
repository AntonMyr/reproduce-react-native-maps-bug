# Setup
1. Run eas init

2. Add your google maps API key to app.json:

```json
    "ios": {
        "config": {
                "googleMapsApiKey": ""
        }
    }
```

3. Create a development build (can't use google maps in expo go)

`eas build --profile development --platform ios`

4. Run the app `npm start`


## app.json example
```json
{
  "expo": {
    "name": "<fill in>",
    "slug": "<fill in>",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "<fill in>",
      "config": {
        "googleMapsApiKey": "<fill in>"
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "config": {
        "googleMaps": { "apiKey": "<fill in>" }
      },
      "package": "<fill in>"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "<fill in>"
      }
    },
    "owner": "<fill in>"
  }
}
```