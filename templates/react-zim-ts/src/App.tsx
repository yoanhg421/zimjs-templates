import { Component, ReactNode, StrictMode } from "react"

import "./App.css"

import { Frame, Circle } from "zimjs"

class ZimFrame extends Component {
  frame: Frame | undefined

  componentDidMount(): void {
    this.frame = new Frame({
      scaling: "zim",
      width: 600,
      height: 300,
      ready: () => {
        new Circle(50, red).center().drag()
      },
    })
  }
  componentWillUnmount(): void {
    this.frame?.dispose()
  }
  render(): ReactNode {
    return null
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

        {/* Include Zim  code from outside StrictMode */}
        <ZimFrame />
      </div>
    </>
  )
}

export default App
