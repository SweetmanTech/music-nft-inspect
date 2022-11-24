# ⏯️ music-nft-inspect 🎧

this package allows you to easily verify music nfts.

This library works alongside the [metadata checker](https://hq.decent.xyz/) and allows for DAOs and individuals to compare nft metadata to the top music metadata standards including Catalog, Sound, Decent & more. Arbitrary music NFTs across a wide variety of contract implementations are supported.

### Main components:

- [evaluateCatalog20220202](https://gist.github.com/bretth18/df8358c840fa94946ec212f753e290dd)

### Quickstart

1. Install package:

```bash
yarn add music-nft-inspect
```

2. Evaluate:

```tsx
import { evaluateCatalog20220202 } from "music-nft-inspect";

const metadata = {};
const { missing, score, match, errors } = evaluateCatalog20220202(metadata);
```

### Contributing

If you're from Sound, Catalog, Ooh La La, Spin Amp, Future Tape, Zora, etc, this section is for you.

There are 2 types of modules you can contribute.

#### Evaluators

- evaluators are the method to validate metadata schemas.
- examples found in `src/evaluators`

#### Parsers

- parse metadata into standard JSON from
  - `parseContractJson`
  - `parseTokenUriJson`
- examples found in `src/parsers`
