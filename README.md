# Vite + Deno + React + TypeScript

## Running

You need to have Deno v1.28.0 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

## Notes

- You need to use `.mjs` or `.mts` extension for the `vite.config.[ext]` file.

## Setting up Convex

❌ I had to add a dummy `package.json` with `"convex"` in it as a dependency, otherwise the convex CLI refuses to continue. It doesn't serve any other functional purpose in this project.

✅ Codegen worked well, as did adding Convex to the app.

❌ The current convex output currently does _not_ pass `deno check`. I tried to make wrappers/aliases/etc. to make the generated code work, but there was no way around changing the generated code. I had to make the following changes:

- Add `/// <reference ...` comments to the .js files that point to their respective .d.ts files:

  ```js
  /// <reference types="./api.d.ts" />
  ```

  ```js
  /// <reference types="./server.d.ts" />
  ```

- Update the imports to use exact file extensions:
  ```ts
  // convex/_generated/server.d.ts
  import type { DataModel } from "./dataModel.d.ts"
  ```
  ```ts
  // convex/_generated/api.d.ts
  import type * as tasks from "../tasks.ts"
  ```

❌ When running convex dev through deno: `deno run -A npm:convex dev`, Ctrl+C does not close the process. But I suspect that may be a Deno and/or Windows problem
