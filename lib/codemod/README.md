# Codemods for NewsKit

NewsKit provides Codemod transformations to help upgrade your codebase when a component is updated or deprecated.

Codemods are transformations that run on your codebase programmatically. This allows for a large amount of changes to be applied without having to manually go through every file.

## Usage

You can run these at the root of your project.

```bash
npx @newskit/codemod [codemod] [paths]
```

run to see all codemods and flags

```bash
npx @newskit/codemod --help
```

## Development

Link this package in your global `node_modules` by running:

```bash
cd lib/codemod
yarn link
```