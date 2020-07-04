import React from 'react'

import { ExampleComponent } from 'react-editor123'
import 'react-editor123/dist/index.css'

const App = () => {
  return <ExampleComponent
    controlled={true}
    api='https://jsonplaceholder.typicode.com/photos?_limit=10'
    imgField='thumbnailUrl'
  />
}

export default App