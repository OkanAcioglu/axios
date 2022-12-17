import { useEffect } from 'react'
import authFetch from '../axios/custom'
import axios from 'axios'

//! We will setup a custom instance and for that we create a new file called custom.js
//! using .create() we pass in the object and add the choice that we want.
//! in custom.js we setup baseURL. It is used for if we setting up multiple requests to the same server we can add the root URL
//! same goes for headers. Instead of setting up headers default or globally to all request made with Axios, we can add headers property
//! Now when we fetch, resp2 will be use Axios default but resp1 will use the custom setup that we create in the custom.js
const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products')
      const resp2 = await axios(randomUserUrl)
      console.log(resp1, resp2)
    } catch (err) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
