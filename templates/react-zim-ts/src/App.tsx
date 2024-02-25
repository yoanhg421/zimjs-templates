import { Component, ReactNode, StrictMode } from "react"

import "./App.css"

import { Frame, Circle, Dial, Emitter, Pen, MotionController, series, LabelOnArc } from "zimjs"

class ZimFrame extends Component {
    frame: Frame | undefined

    componentDidMount(): void {

        frame = new Frame({
            scaling: "zim",
            width: 600,
            height: 300,
            color: lighter,
            outerColor: grey,
            mouseMoveOutside: true, // so Pen and Dial work better
            ready: () => {

                // ~~~~~~~~~~~~~~~~~~
                // INTRO
                // ZIM is a general canvas framework at https://zimjs.com
                // Below we show a few features - but this is a small sampling 
                // ZIM also makes easy Puzzles, Parallax, Drawings, Connectors, HitTests,
                // Sprites, Animations, Shaders, Effects, Games, Dialogs, Visualizations
                // https://zimjs.com/editor - see ZAPPS section 
                // https://zimjs.com/examples for many examples
                // https://zimjs.com/code for CDN templates without NPM


                // ~~~~~~~~~~~~~~~~~~
                // SHAPES
                // ZIM has lots of shapes including Blob and Squiggle for free-form shapes 
                // We can add transform(), gesture() and 80 other methods - here we drag()
                // normally, drag() objects come up on top but that would put the circle above the emitter
                // ZIM has chaining for most methods
                const circle = new Circle(50, purple)
                    .center()
                    .drag({ onTop: false })

                    // ~~~~~~~~~~~~~~~~~~
                    // ANIMATION
                    // ZIM has industry leading animation on par with GSAP and beyond 
                    // with animation along user editable paths, sequencing and series, and much more
                    // and so easy to use - at 30% the code of HTML/CSS animations
                    .animate({
                        props: { color: red },
                        time: 2,
                        rewind: true,
                        loop: true
                    })


                // ~~~~~~~~~~~~~~~~~~
                // COMPONENTS
                // ZIM has over 40 components - see https://zimjs.com/uiux.html
                // and optional normal parameters or a config object - we call this ZIM DUO
                const dial = new Dial({ min: 1, max: 3, step: 0, backgroundColor: blue })
                    .sca(.5)
                    .pos(20, 20, RIGHT, BOTTOM)
                    .change(() => { circle.sca(dial.currentValue) }) // could also use wire()


                // ~~~~~~~~~~~~~~~~~~
                // CONTROLS
                // ZIM has dozens of controls like Tile, Wrapper, Layout, Pages, SoundWave, Parallax, Synth, etc.
                // We show the Emitter and Pen here
                const emitter = new Emitter({ startPaused: true })

                circle.on("pressup", () => {
                    emitter.loc(circle).spurt(10)
                })

                // ZIM has dynamic parameters - we call this ZIM VEE 
                // An array [] picks randomly, or use a min, max {}, series or result of a function 
                // The pen lines can be dragged, double clicked or held to be deleted 
                // ZIM has all sorts of features for Art and Data Visualization 
                // see https://zimjs.com/art.html and https://zimjs.com/data.html
                const pen = new Pen({ min: 10, max: 60 }, series(pink, white)).addTo().bot()

                // MotionController controls movement of any DisplayObject in various ways: 
                // mousemove, pressmove, pressdrag, keydown, gamebutton, gamestick, swipe, follow, manual
                // Note the mousedownIncludes parameter if wanting to draw on things
                new MotionController(pen, "pressmove")


                // ~~~~~~~~~~~~~~~~~~
                // TEXT 
                // ZIM has Label(), LabelLetters(), LabelWords(), LabelOnPath(), TextInput() 
                // for various features with text
                new LabelOnArc("DRAW ON BACKING", 12, undefined, dark)
                    .center()
                    .animate({ wait: 2, props: { alpha: 0 } })


                // ~~~~~~~~~~~~~~~~~~
                // MUCH MORE! 
                // See https://zimjs.com/about for features 
                // see https://zimjs.com/docs for docs 
                // see https://zimjs.com/tips for tips 
                // see https://zimjs.com/learn to learn ZIM 
                // see https://devs.zimjs.com for a Dev approach


                // ~~~~~~~~~~~~~~~~~~
                // DONATE 
                // If ZIM helps you out, help us get ZIM to the people https://zimjs.com/donate


            } // end ready
        }) // end frame

    } // end componentDidMount
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
