import React from 'react'

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
    </div>
  )
}
