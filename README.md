# ⏯️ npm typescript + react template 🎧

this package allows you to easily create your node package with typescript and react with npm infrastructure.

This library works alongside the [metadata checker](https://hq.decent.xyz/) and allows for DAOs and individuals to run their own decentralized record labels. Arbitrary music NFTs across a wide variety of contract implementations are supported.

![DECENT_AUDIO_PLAYER](https://user-images.githubusercontent.com/23249402/201524220-eaa1c4d4-f24c-409d-9cee-bcaf40c66f0c.gif)

### Main components:

- [AudioPlayer](https://github.com/SweetmanTech/audio-player/blob/main/src/audio-player/AudioPlayer.tsx)
  - Used to render a Play / Pause button.
  - `size` - size of Audio Player.
  - `audioSrc` - src of audio.
  - `callbackAfterPlay` - function to call after track begins playing.
  - `active` - flag for pre-released tracks to be unplayable / disabled.

### Quickstart

1. Install package:

```bash
yarn add decent-audio-player
```

2. Add Providers:

```tsx
import { useReducer } from "react";
import {
  DispatchPlayerContext,
  PlayerContext,
  playerInitialState,
  playerReducer,
} from "decent-audio-player";

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(playerReducer, playerInitialState);
  return (
    <PlayerContext.Provider value={state}>
      <DispatchPlayerContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </DispatchPlayerContext.Provider>
    </PlayerContext.Provider>
  );
};
```

3. Render a simple Audio Player:

```tsx
import { AudioPlayer } from "decent-audio-player";

export const Page = () => (
  <AudioPlayer
    size={56}
    audioSrc="https://nftstorage.link/ipfs/QmWNaSdhXq2WdusiBcVC2Ju5A1JJySRDVNrQMEBGcaazvC"
    callbackAfterPlay={console.log}
    active
  />
);
```
