import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ContextProvider } from '../contextApi/appContext'
import { Provider } from 'react-redux'
import store from "../reduxStore/reducers/store"
export default function App({ Component, pageProps }) {
  return (
  
    <ContextProvider>
      <Provider store={store}>
        <div style={{margin:"0",
  height: "100vh",
  display: "flex",
  flexDirection:"column"}}>
        <Navbar/>
        <Component {...pageProps} />
       
        </div>
      
      </Provider>
    </ContextProvider>
    
    )
}
