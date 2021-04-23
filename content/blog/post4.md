---
title: Template refs in Vue 3, Typescript and Composition API
slug: template-refs-vue-3-typescript-composition-api
excerpt: Template refs are often used to manipulate DOM elements, this can become challenging in Vue 3 Composition API with Typescript because of the way Vue 3 infers the type from the `ref()` function.
date: 2021-04-23
id: 4
---

Template refs are often used to manipulate DOM elements, this can become challenging in Vue 3 Composition API with Typescript because of the way Vue 3 infers the type from the `ref()` function.

The solution: use an empty `ref()` and leave it untyped. Problem solved.

If you must type it for whatever reason, you can do the following:

```js
const sidebar = ref<HTMLElement>();
let sidebarHeight = ref<number>(0);

onMounted(() => {
      let height = sidebar.value?.offsetHeight;
      height && (sidebar.value!.style.maxHeight = `${height.toString()}px`);
    });
```

You can see we're checking height is truthy first, and we're forced to use the optional chaining `?` operator.
And then we're also using the typescript not-null assertion operator `!`.

This took some playing with to find the right combination or truthy checks, `?`, and `!`.

It's not an ideal situation, so if your situation is a small-scope, contained function that doesn't affect other parts of the codebase, I'd say don't spend too much time on it. Leave it untyped.

