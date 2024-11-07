import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Store } from 'src/redux/Store.jsx'
import App from 'src/App'
import Loading from 'src/components/Loading'
import { ToastContainer } from "react-toastify";
import 'src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={Store}>
        <App />
      </Provider>
    </Suspense>
    <ToastContainer />
  </React.StrictMode>,
)
