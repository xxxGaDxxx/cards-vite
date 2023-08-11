import { Provider } from 'react-redux'

import { Router } from './router.tsx'
import { store } from './store/store.ts'

export function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}
