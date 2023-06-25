import React, { useEffect, useState } from 'react'
import { API_URL } from '../constants'
import Product from '../components/Product'
function Home() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  async function fetchProducts() {
    setLoading(true)
    try {
      const resp = await fetch(API_URL)
      const posts = await resp.json();
      console.log(posts);
      setPosts(posts)
    } catch (err) {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className='m-16'>
      {
        <div className=' p-8 grid grid-cols-4 max-w-6xl gap-4 m-auto'>
          {
            posts.map(post => <Product post={post}/>)
          }
        </div>
      }
    </div>
  )
}

export default Home
