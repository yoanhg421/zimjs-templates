#Welcome

Here are templates to add ZIM to Vue, React, Svelte and Angular using NPM.

Useful links:
- https://zimjs.com 
- https://www.npmjs.com/package/zimjs
- https://github.com/danzen/zimjs
- https://zimjs.slack.com

### Intructions

1. All templates are Plug 'n Play. 
2. Just clone the repo or download the template you want. 
3. Open the template folder of your choice in your editor 

If you are using React, Vue, Svelte

5. Run ```npm install```
6. Run ```npm run dev```

If you are have Angular and haven't done so already, install it globally by running 

```
npm install -g @angular/cli
```

4. Run ```npm install```
5. Run ```ng serve```


 And you are good to go.


## Using ZIM without typescript 

If you have a project that doesn't use typescript you can use the samples below to add ZIM to your project


### VUE - with zim namespace
```javascript
<script setup>  
  import { onMounted, onBeforeUnmount } from "vue";
  import zim from "zimjs";
  let frame;
  onMounted(() => {
    frame = new zim.Frame({
      scaling: "zim",
      width: 500,
      height: 400,
      color:light,
      ready: () => {
          // put code here
          new zim.Circle(50, red).center().drag();
      }
    });
  });
  onBeforeUnmount(() => {
    frame.dispose();
  });  
</script>
<template>
  <div id="zim"></div>
</template>
<style>
</style>
```
### VUE - without zim namespace 
```javascript
<script setup>  
  import { onMounted, onBeforeUnmount } from "vue";
  import zim from "zimjs";
  zim.zimplify(); // make zim commands global
  let frame;
  onMounted(() => {
    frame = new Frame({
      scaling: "zim",
      width: 500,
      height: 400,
      color:light,
      ready: () => {
          // put code here
          new zim.Circle(50, red).center().drag();
      }
    });
  });
  onBeforeUnmount(() => {
    frame.dispose();
  });  
</script>
<template>
  <div id="zim"></div>
</template>
<style>
</style>
```
### SVELTE - with zim namespace
```javascript
<script >  
  import { onMount, onDestroy } from "svelte";
  import zim from "zimjs";
  let frame: Frame;
  onMount(() => {
    frame = new zim.Frame({
      scaling: "zim",
      width: 500,
      height: 400,
      color:light,
      ready: () => {
          // put code here
          new zim.Circle(50, red).center().drag();
      }
    });
    function ready() {
      // put code here
      new zim.Circle(50, red).center().drag();
    }
  });
  onDestroy(() => {
    frame.dispose();
  });
</script>
<main>
  <div id="zim">
</main>
<style>
</style>
```
### SVELTE - without zim namespace
```javascript
<script>  
  import { onMount, onDestroy } from "svelte";
  import zim from "zimjs";
  zim.zimplify(); // make zim commands global
  
  let frame;
  onMount(() => {
    frame = new Frame({
      scaling: "zim",
      width: 500,
      height: 400,
      color:light,
      ready: () => {
          // put code here
          new zim.Circle(50, red).center().drag();
      }
    });
  });
  onDestroy(() => {
    frame.dispose();
  });
</script>
<main>
  <div id="zim">
</main>
<style>
</style>
```
### REACT - with zim namespace
```javascript
<script>
    import { Component, ReactNode, StrictMode } from "react";
    import "./App.css";
    import zim from "zimjs";
    class ZimFrame extends Component {
      frame: zim.Frame | undefined;
  
      componentDidMount(): void {
          this.frame = new zim.Frame({
            scaling: "zim",
            width: 500,
            height: 400,
            color:light,
            ready: () => {
                // put code here
                new zim.Circle(50, red).center().drag();
            }
          });
      }
      componentWillUnmount(): void {
          this.frame?.dispose();
      }
      render(): ReactNode {
          return null;
      }
    }
    function App() {
      return (
          <>
          <div>
              {/* Move StrictMove from the root to here */}
              <StrictMode>
              <div id='zim'></div>
              </StrictMode>
              {/* Include ZIM code outside StrictMode */}
              <ZimFrame />
          </div>
          </>
      )
    }
    export default App;
</script>
```
### REACT - without zim namespace
```javascript
<script>
    import { Component, ReactNode, StrictMode } from "react";
    import "./App.css";
    import zim from "zimjs";
    zim.zimplify(); // make zim commands global
    class ZimFrame extends Component {
      frame: Frame | undefined;
  
      componentDidMount(): void {
          this.frame = new Frame({
            scaling: "zim",
            width: 500,
            height: 400,
            color:light,
            ready: () => {
                // put code here
                new Circle(50, red).center().drag();
            }
          });
      }
      componentWillUnmount(): void {
          this.frame?.dispose();
      }
      render(): ReactNode {
          return null;
      }
    }
    function App() {
      return (
          <>
          <div>
              {/* Move StrictMove from the root to here */}
              <StrictMode>
              <div id='zim'></div>
              </StrictMode>
              {/* Include ZIM code outside StrictMode */}
              <ZimFrame />
          </div>
          </>
      )
    }
    export default App;
</script>
```


### Special Thanks

Dr Abstract [@danzen](https://github.com/danzen)
