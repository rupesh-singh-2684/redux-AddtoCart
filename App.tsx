import React from 'react'
import { Provider } from 'react-redux'
import ProductList from './src/screens/home'
import { store } from './src/redux/store'
import FavouriteList from './src/screens/favourite'
import StackNavigation from './src/navigator'

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  )
}

export default App