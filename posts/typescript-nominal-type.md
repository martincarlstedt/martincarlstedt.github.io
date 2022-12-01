---
title: Typescript Nominal type
description: A custom type to represent a value class in typescript
date: '2023-01-15T00:00:00Z'
type: snippet
---

### Definition
```typescript jsx
declare const NominalType: unique symbol

export type Nominal<T, Id> = T & { readonly [NominalType]: Id }
```

### Usage
```typescript 
type ContactId = Nominal<string, 'ContactId'>

const contactId = 'abc123' as ContactId
```