# Queries

This directory is meant to store simple functions that render `Template Literals` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), which are just strings within backticks. The purpose of these functions is to make repeatable parts of queries easily reusable and more readable.

## Conventions

1. File names should start with the `get` prefix, such as `getQueryName.ts`.
2. Each function should return a Template Literal.
3. The functions should only return the fields inside an object {}, as the same component may have different names in the CMS. The exception to this rule are the parts of `Modular Components`.
4. Parts of `Modular Components` should return the entire module query, as these are considered to be constant.
5. The naming convention for parts of a `Modular Component` should include "module" in the name, such as `getQueryName.module.ts`.

## Examples

1. Regular Component query:

```ts
export const getHead = () => `
{
  title
  description
}
`;
```

2. Modular Component query:

```ts
export const getChapter = () => `
... on Chapter {
  id
  __typename
  chapterName
  content
}
`;
```
