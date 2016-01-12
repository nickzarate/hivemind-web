import React from 'react'
import DevTools from 'containers/DevTools' // will need to change for prod vs dev

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         { this.props.children }
//       </div>
//     )
//   }
// }

export default function App({ children }) {
  return (
    <div>
      { children }
      <DevTools />
    </div>
  )
}
