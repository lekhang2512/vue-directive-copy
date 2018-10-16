# vue-directive-copy
A simple copy text directive for Vuejs
[NPM Package](https://www.npmjs.com/package/vue-directive-copy)

[Demo!](https://codepen.io/lekhang2512/pen/aRVgzY)

![enter image description here](https://raw.githubusercontent.com/lekhang2512/vue-directive-copy/master/src/assets/demo.png)

## Development (NPM / Yarn)
```
npm run dev
yarn dev
```

## Install

#### NPM / Yarn

Install the package:

```
npm install vue-directive-copy
yarn add vue-directive-copy
```

Then import it in your project
```javascript
import ClickCopy from 'vue-directive-copy'

Vue.use(ClickCopy)
```
Single component
```javascript
import { copy } from 'vue-directive-copy/src/copy'
import 'vue-directive-copy/src/style.css'

export default {
  directives: {
    copy
  }
}
```

#### Browser global

```html
<script src="path/to/vue.js"></script>
<script src="path/to/dist/vue-directive-copy.js"></script>
```

## Usage

You can simply view [App.vue](https://github.com/lekhang2512/vue-image-lightbox-carousel/blob/master/src/App.vue) to see how to use **vue-upload-multiple-image**

How to use:
```html
<span v-copy="'Le Khang'">Le Khang</span>
```

## Example
```html
<template>
  <span v-copy="'Le Khang'">Le Khang</span>
</template>

<script>
import { copy } from 'vue-directive-copy'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  directives: {
    copy
  }
}
</script>

## References
- [vue-popperjs](https://github.com/sindresorhus/copy-text-to-clipboard#readme)
- [v-copy](https://github.com/egoist/v-copy)
