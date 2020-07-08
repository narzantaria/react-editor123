import React from 'react'

import { ExampleComponent } from 'react-editor123'
// import 'react-editor123/dist/index.css'

const App = () => {
  return <ExampleComponent
    controlled={true}
    api='http://localhost:5000/api/files'
    rootUrl='http://localhost:5000/'
    upload={true}
  />
}

export default App


// import React from 'react'

// import { ExampleComponent } from 'react-editor123'
// import 'react-editor123/dist/index.css'

// const App = () => {
//   return <ExampleComponent
//     controlled={true}
//     api='http://localhost:5000/api/files'
//     rootUrl='http://localhost:5000/'
//     upload={true}
//   />
// }

// export default App