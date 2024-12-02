import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react"
import TimeAgo from 'timeago-react'

interface State {
  // No state for this component
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class StreamlitTimeAgo extends StreamlitComponentBase<State> {
  public render = (): ReactNode => {
    const datetime = this.props.args["datetime"]
    return (
		<TimeAgo datetime={datetime} />
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(StreamlitTimeAgo)
