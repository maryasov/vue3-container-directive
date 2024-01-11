# vue3-container-directive

[![version](https://img.shields.io/npm/v/vue3-container-directive?style=flat-square)](https://www.npmjs.com/package/vue3-container-directive)
[![download](https://img.shields.io/npm/dm/vue3-container-directive?style=flat-square)](https://www.npmjs.com/package/vue3-container-directive)
[![languages](https://img.shields.io/github/languages/top/maryasov/vue3-container-directive?style=flat-square)](https://github.com/maryasov/vue3-container-directive)
[![license](https://img.shields.io/npm/l/vue3-container-directive?style=flat-square)](https://github.com/maryasov/vue3-container-directive)
![vue@3.x](https://img.shields.io/badge/Vue-3.x-brightgreen?style=flat-square)


This directive is only adds styles to parent element.
```css
  container-name: "some-name"; /* if passed by directive argument */
  container-type: inline-size;
```

then you can use @container queries as @media
```css
  @container (max-width: 400px) {
    .card-child {
        /* some adaptive styling */
    }
}
```

## More about @container queries
- [Container queries land in stable browsers](https://web.dev/blog/cq-stable)
- [Styling components using CSS container queries](https://andromedagalactic.com/blog/container-queries)


## Install

**npm**
```
npm install vue3-container-directive
```


```html
<template>
  <div id="app">
    <!-- directives for named container -->
    <div v-container:card>
      <div class="card-child"></div>
    </div>
    
    <!-- directives -->
    <div v-container>
      <div class="card-child"></div>
    </div>
    
  </div>
</template>

<style >
  .card-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @container card (max-width: 400px) {
    /* rules for named container */
    .card-child {
      grid-template-columns: 1fr;
    }
  }

  @container (max-width: 400px) {
    .card-child {
      grid-template-columns: 1fr;
    }
  }
</style>
```

