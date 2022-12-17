import { useEffect } from 'react'
import authFetch from '../axios/interceptors'
//! interceptors are functions that Axios calls for every request
//! we can use them to transform the request before it leaves the app as well as add some custom logic when we handle the response
//! In our example we will add them to the custom instance but keep in mind that we can add them to the global instance also
//! it is either .interceptors.request or .interceptors.response
//! Never forget to add return the response or request in the function
//! syntax is very similar to the default one but we just do not use defaults.

const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-products')
      console.log(resp)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
