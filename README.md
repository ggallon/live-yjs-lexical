# Collaborative Rich Text Editor (Lexical)

This example shows how to build a collaborative text editor with [Liveblocks](https://liveblocks.io), [Yjs](https://docs.yjs.dev), [Lexical](https://lexical.dev/), and [Next.js](https://nextjs.org/).

As users edit the document, changes will be automatically persisted and synced—allowing for an editor that updates in real-time across clients. Users will also be able to see who see each other’s cursors in the document.

## Getting started

Run the following command to try this example locally:

```bash
npx create-liveblocks-app@latest --example nextjs-yjs-lexical --api-key
```

This will download the example and ask permission to open your browser, enabling you to automatically get your API key from your [liveblocks.io](https://liveblocks.io) account.

### Manual setup

<details><summary>Read more</summary>

<p></p>

Alternatively, you can set up your project manually:

- Install all dependencies with `pnpm install`
- Create an account on [liveblocks.io](https://liveblocks.io/dashboard)
- Copy your **secret** key from the [dashboard](https://liveblocks.io/dashboard/apikeys)
- Create an `.env.local` file and add your **secret** key as the `LIVEBLOCKS_SECRET_KEY` environment variable
- Run `npm run dev` and go to [http://localhost:3000](http://localhost:3000)

</details>

### Deploy on Vercel

<details><summary>Read more</summary>

<p></p>

To both deploy on [Vercel](https://vercel.com), and run the example locally, use the following command:

```bash
npx create-liveblocks-app@latest --example nextjs-yjs-lexical --vercel
```

This will download the example and ask permission to open your browser, enabling you to deploy to Vercel.

</details>

### Develop on CodeSandbox

<details><summary>Read more</summary>

<p></p>

After forking [this example](https://codesandbox.io/s/github/liveblocks/liveblocks/tree/main/examples/nextjs-yjs-lexical) on CodeSandbox, create the `LIVEBLOCKS_SECRET_KEY` environment variable as a [secret](https://codesandbox.io/docs/secrets).

</details>
