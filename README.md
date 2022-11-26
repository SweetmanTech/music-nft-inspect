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
import { evaluate } from "music-nft-inspect";

const metadata = {};
const results = evaluate(metadata);
console.log("missing array", results[0].missing);
console.log("matching array", results[0].matching);
console.log("score", results[0].score);
```

<img width="823" alt="Screenshot 2022-11-25 at 1 44 07 PM" src="https://user-images.githubusercontent.com/23249402/204039135-6de03f1c-26a0-4fc9-9846-1a4d6c73d789.png">

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
