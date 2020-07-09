/*
To get and upload an images from/to server, set api, rootUrl and upload props as it configured in your server
api='http://localhost:5000/api/files'
rootUrl='http://localhost:5000/'
upload={true}
*/

import React from 'react'

import { ExampleComponent } from 'react-editor123'

const App = () => {
  return <ExampleComponent
    controlled={false}
  />
}

export default App