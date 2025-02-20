# Minimal reproduction for `@content-collections/next`

A minimal reproduction for an empty content issue with
`@content-collections/next` when running the dev server.

```
npm ci
npm run build-content
npm run typecheck # this works
npm run dev-then-sigint
npm run typecheck # empty content files causes typecheck failure
```
