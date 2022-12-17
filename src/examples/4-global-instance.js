import { useEffect } from 'react'
import axios from 'axios'
//! We can add some kind of functionality by default means everytime we will make a request with Axios instance, that functionality will be added.
//! Here below there a few examples...
// axios.defaults.headers.common['Accept'] = 'application/json'
// axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded'
//! There are some downsides if we use global approach and we will showcase that...
//! We create a global.js and in that file we add global axios default then we will import that file in the App.js (can be index.js too)
//! Now after invoke the global.js in the App.js , if we import axios here , as long as we invoke the global.js file in the App.js; logic that we want to setup in the global.js automatically applied.
//! After fetching the data when we look at the our fetch in network tab in the DevTools, we can see that our global logic added to the fetch...
//! Now we make a second fetch and if we look at the fetch in the DevTools we can see that our global logic added to our fetch
//! For this case it is not a big deal but if we have something sensitive (JSON web token) using global default may cause problems.

// our Server
const productsUrl = 'https://course-api.com/react-store-products'
// different server
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl)
      const resp2 = await axios(randomUserUrl)
      console.log(resp1)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
