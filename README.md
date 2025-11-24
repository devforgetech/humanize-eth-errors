# humanize-eth-errors

<p align="center">
  <strong>Convert Ethereum RPC and smart contract errors into **friendly,
human-readable messages**</strong><br/>
  A tiny, modern TypeScript library for dApps, wallets, and Web3
frontends.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/humanize-eth-errors">
    <img alt="npm version" src="https://img.shields.io/npm/v/humanize-eth-errors?color=blue&style=for-the-badge">
  </a>
  <a href="https://www.npmjs.com/package/humanize-eth-errors">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/humanize-eth-errors?color=blue&style=for-the-badge">
  </a>
  <a href="https://github.com/orvexis/humanize-eth-errors/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/orvexis/humanize-eth-errors?style=for-the-badge">
  </a>
</p>

---

## 🚀 Features

- 🔍 Detects & explains common Ethereum errors\
- 🧠 Human-readable messages for users\
- 🔌 Works with **viem**, **ethers**, **wagmi**, and raw RPC errors\
- 🧩 Extensible custom mappings\
- 📦 Zero dependencies\
- ⚡ Lightweight (\<5 kB)

---

## 📦 Install

```bash
npm install humanize-eth-errors
# or
yarn add humanize-eth-errors
# or
pnpm add humanize-eth-errors
```

---

## 🛠️ Usage

```ts
import { humanizeError } from 'humanize-eth-errors';

try {
  await contract.write.transfer([to, amount]);
} catch (err) {
  const h = humanizeError(err);
  console.log(h.title); // "Insufficient Allowance"
  console.log(h.message); // "Your allowance is too low for this operation."
}
```

---

## 📘 Example Output

Input RPC error:

    Error: execution reverted: ERC20: transfer amount exceeds allowance

Output:

```json
{
  "title": "Insufficient Allowance",
  "message": "Your allowance is too low for this operation.",
  "original": "execution reverted: ERC20: transfer amount exceeds allowance"
}
```

---

## 💡 API

### `humanizeError(error: unknown): Humanized`

Returns:

```ts
interface Humanized {
  title: string;
  message: string;
  original: string;
}
```

---

### `addMappings(custom: Record<string, string>)`

Extend or override error mappings:

```ts
addMappings({
  'auction has not started': "This auction hasn't started yet.",
  'already minted': 'You already minted this NFT.',
});
```

---

## 🧠 What Errors Are Supported?

- User rejected errors (MetaMask, WalletConnect, Coinbase Wallet)
- Gas issues
- Insufficient funds
- Allowance too low
- Token balance too low
- Generic "execution reverted"
- Node RPC failures
- ABI decoding issues
- Metamask's internal errors

And more added continuously.

---

## 📁 Project Structure

    src/
      index.ts
      mappings.ts
      types.ts
    test/
      humanize.test.ts

---

## 🛣️ Roadmap

- ⏳ Expand error dictionary (community-driven)
- 🌍 Chain-specific mappings (Arbitrum, Optimism, Base)
- 📘 Add EIP-838 compliant formatting
- 🧪 More test coverage
- 🔌 Plugins for wagmi + viem

---

## 🤝 Contributing

PRs are welcome!\
Add new errors to `mappings.ts` or open an issue with examples.

---

## 📦 GitHub Repository

You can find the full source code, issues, discussions, and documentation here:

👉 **https://github.com/orvexis/humanize-eth-errors**

## 📝 License

MIT © 2025
