---
title: demo
---

### Title <Badge type="info" text="default" />

### Title <Badge type="tip" text="^1.9.0" />

### Title <Badge type="warning" text="beta" />

### Title <Badge type="danger" text="caution" />

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md

```

```
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->

```

<br/>
<hr/>

# Emoji 🎉

- Input

```
:tada: :100:
```

- output

:tada: :100:

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.

<br/>
<hr />

# Default Title

Input

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


```

Output

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Custom Title

Input

````
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

Output

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

A [list of valid languages](https://github.com/shikijs/shiki/blob/main/docs/languages.md) is available on Shiki's repository.

## Line Highlighting in Code Blocks

Input

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

output

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

Line ranges: for example `{5-8}`, `{3-10}`, `{10-17}`

Alternatively, it's possible to highlight directly in the line by using the // [!code hl] comment.

````
```js
export default {
  data() {
    return {
      msg: 'Highlighted!', // [!code  hl]
    }
  },
}
```
````

```js
export default {
  data() {
    return {
      msg: 'Highlighted!', // [!code hl]
    }
  },
}
```

## 模糊其他代码

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

````

```js
export default {
  data() {
    return {
      msg: 'Focused!', // [!code focus]
    }
  },
}
```

## 类似 git 提交记录对比

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
````

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 标注

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning', // [!code warning]
    }
  },
}
```

<hr />

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning', // [!code warning]
    }
  },
}
```

## 倒入代码片段

```
<<< @/components/CustomComponent.vue{2}
```

<<< @/../components/CustomComponent.vue{2}

## md 文件中包含 md 文件

```
<!--@include: ./parts/basics.md-->
```

## md 文件中使用 vue 代码

```
{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>
```

{{1+1}}

<span v-for="i in 3">{{ i }}</span>

```js
<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>
```

Input

```
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

Output
::: v-pre
`{{ This will be displayed as-is }}`
:::

## md 文件中导入 vue 组件

<CustomComponent />

```
<script setup>

import CustomComponent from '../../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

```

<hr/>

# Vue Click Away

- 这个是全局组件
  <VueClickAwayExample/>

<script setup>
import { useData } from 'vitepress'
import CustomComponent from '../../components/CustomComponent.vue'
const { theme } = useData()

</script>

<template>
  <h1>{{ theme }}</h1>
</template>
