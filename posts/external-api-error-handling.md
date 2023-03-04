---
title: External API error handling
description: My takeaways from working with shaky APIs
date: '2023-01-16T00:00:00Z'
draft: true
---

## 404 Not found

First we need to realize that a 404 is not really an error.
The HTTP status is just telling us that the specific resource does not exist.

```kotlin
when (response.status) {
    Ok -> ...
    NotFound -> throw SomethingNotFoundException(...)
}
```

```kotlin
when (response.status) {
    Ok -> ...
    NotFound -> null
}
```

## 504 Gateway timeout

### Asynchronous use cases

### Synchronous use cases

## 500 Internal server error

Let's talk about the elephant in the room.

## "Unrecoverable" errors

### 400 Bad request

If your requests are badly formatted it is unlikely that any retry attempt will succeed.

### 401 Unauthorized & 403 Forbidden

Well, you're toast.

## Conclusion

- 404 is not an error.
- 504 Gateway timeouts should probably be aborted early and retried
- 500 internal server errors should be evaluated and retried when possible
