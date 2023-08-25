import { Provider } from 'react-redux'

import { Toast } from './components'
import { Router } from './router'
import { store } from './store/store'

export function App() {
  return (
    <>
      <Provider store={store}>
        <Toast />
        <Router />
      </Provider>
    </>
  )
}
