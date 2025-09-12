# Sticker Smash

Simple React Native app built with Expo. Pick an image and add emoji stickers on top.

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the app (Metro bundler):

   ```bash
   npx expo start
   ```

   - Press i to open iOS Simulator
   - Press a to open Android Emulator
   - Or scan the QR with Expo Go

## Project structure

- `app/`: Routes and screens (Expo Router)
- `components/`: Reusable UI (image viewer, emoji picker, buttons)
- `assets/`: Images and fonts

## Building with EAS (optional)

```bash
npx expo login          # if needed
npx expo prebuild       # only if you need native projects
eas build -p ios        # or: eas build -p android
```

See `eas.json` for build profiles.
