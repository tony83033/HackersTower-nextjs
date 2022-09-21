import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import React, { useState , useEffect} from 'react'
import LoadingBar from 'react-top-loading-bar'
// import { Router } from 'next/router'

//const router = useRouter()
function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [progress, setProgress] = useState(0)
  const [user, setuser] = useState({value:null})
  const [key, setkey] = useState(0)
 
  useEffect(() => {
    console.log("Use state is running")
   
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100);
    })
    router.events.on('routeChangeStart', ()=>{
      setProgress(35);
    })
    let token = localStorage.getItem('token');
    if(token){
      setuser({value:token});
      setkey(Math.random())
    }else{
      setuser({value:null});
      setkey(Math.random());
    }
  }, [router.query])

  const logout = ()=>{
    localStorage.removeItem('token');
    setkey(Math.random());
    setuser({value:null});
  }
  
  
  
  return<> 
  <LoadingBar
        color='#007acc'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  <Navbar  user={user} logout={logout} /><Component {...pageProps} /> <Footer/> </>
}

export default MyApp
