import { useEffect } from 'react'
//! import axios
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-productss'

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      //! by default axios use "get" method
      const response = await axios(url)
      console.log(response)
      //! data is in the "data" property
      const data = response.data
      console.log(data)
      //! Unlike the fetch (fetch only treats the network errors as errors), axios treats all of the errors
    } catch (error) {
      console.log(error.response) //! Whole response
      console.log(error.response.data) //! only error data
    }
  }
  useEffect(() => {
    fetchData()
    console.log('first axios request')
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
