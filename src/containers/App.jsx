import React from 'react'

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>
//           { this.props.children }
//         </div>
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
