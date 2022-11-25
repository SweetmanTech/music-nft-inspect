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
const { missing, score, matching } = evaluateCatalog20220202(metadata);
console.log("missing array", missing);
console.log("matching array", matching);
console.log("score", score);
```

### Contributing

If you're from Sound, Catalog, Ooh La La, Spin Amp, Future Tape, Zora, etc, this section is for you.

There are a few module types you can contribute to.

#### Evaluators

- evaluators are the method to validate metadata schemas.
  - `evaluate` method - returns `{missing, matching, score}` given a `metadata` JSON object.
- examples found in `src/evaluators`

#### Schemas

- standard metadata JSON for music nfts
- examples found in `src/schemas`
