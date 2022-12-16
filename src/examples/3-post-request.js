import { useState } from 'react'
import axios from 'axios'
const url = 'https://course-api.com/axios-tutorial-post'

//! send data to the server
//! axios.post(url, {data}) // Reference to the HTTP post method
//! more options (auth header) - axios.post(url,{data},{}) --> if we need to add more info about request for example authorization header, we will pass the third argument.

//! We are not gonna save the user in a database but if we provide both values we will get back succesfull response however if one them is missing then we will get back error response
const PostRequest = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // const resp = await axios.post(url, { name: name, email: email })
      const resp = await axios.post(url, { name, email }) //! ES6 shorthand
      console.log(resp.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  )
}
export default PostRequest
