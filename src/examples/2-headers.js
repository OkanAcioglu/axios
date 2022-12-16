import { useState } from 'react'
import axios from 'axios'

//! When we need to provide more options such as "request headers" and for that we need pass additional argument and we will set it up as an object
//! second argument --> axios.get(url,{})
//! third argument --> axios.post(url,{data},{})

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = async () => {
    try {
      // const resp = await axios(url)
      // console.log(resp) //! we are not getting our data in json format so we will add headers...
      //? First Approach
      // const resp = await axios(url, {
      //   headers: { Accept: 'application/json' },
      // })
      // console.log(resp)
      //? Second Approach
      const { data } = await axios(url, {
        headers: { Accept: 'application/json' },
      })
      //console.log(data.joke)
      setJoke(data.joke)
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}
export default Headers
