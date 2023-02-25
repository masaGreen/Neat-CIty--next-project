import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ContextProvider } from '../contextApi/appContext'
import { Provider } from 'react-redux'
import store from "../reduxStore/reducers/store"
export default function App({ Component, pageProps }) {
  return (
  
    <ContextProvider>
      <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
      </Provider>
    </ContextProvider>
    
    )
}
