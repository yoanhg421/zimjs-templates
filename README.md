<img src=https://github.com/danzen/zimjs-templates/assets/380281/85f60a84-2835-4cb7-90bf-9087a68e7295 width=400>

<p>Here are NPM templates to add ZIM to Vue, React, Svelte and Angular using NPM.</p>

Useful links:
- https://zimjs.com 
- https://www.npmjs.com/package/zimjs
- https://github.com/danzen/zimjs
- https://zimjs.slack.com

### Instructions

1. Download the CODE (green button on main page)
2. Unzip, copy a desired template folder, and rename it
3. Drop the folder on an editor such as VS Code.
4. Open a terminal (CTRL ` )

If you are using React, Vue, Svelte

5. Run ```npm install```
6. Run ```npm run dev```

If you are have Angular and haven't done so already, install it globally by running 

```
npm install -g @angular/cli
```

7. Run ```npm install```
8. Run ```ng serve```


<p>And you are good to go.</p>

## Helper Modules 

<p>The ZIM Helper Modules are available here:</p>

<p><a href=https://www.npmjs.com/package/@zimjs/physics target="_blank">@zimjs/physics</a> | <a href=https://www.npmjs.com/package/@zimjs/game target="_blank">@zimjs/game</a> | <a href=https://www.npmjs.com/package/@zimjs/three target="_blank">@zimjs/three</a> | <a href=https://www.npmjs.com/package/@zimjs/cam target="_blank">@zimjs/cam</a> | <a href=https://www.npmjs.com/package/@zimjs/pizzazz target="_blank">@zimjs/pizzazz</a></p>

<p>Follow the instructios on the NPM page</p>


## Using ZIM without typescript 

<p>If you have a project that doesn't use typescript you can use the samples below to add ZIM to your project</p>


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
