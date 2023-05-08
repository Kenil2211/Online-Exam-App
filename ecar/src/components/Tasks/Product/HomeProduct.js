import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AppContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
import { Cart } from './Cart'

export const HomeProduct = () => {

  const [loader, setLoader] = useState(true)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [count, setcount] = useState(0)
  const [id, setid] = useState()


  const getAllProducts = () => {
    axios.get('http://localhost:3001/product/getproducts').then((res) => {

      setLoader(false)
      setProducts(res.data.data)
      console.log('==', res.data.data)
    })
  }

  const addToCart = async (pid) => {

    setid(pid)


    // var data = {
    //   "pid": pid
    // }
    // await axios.post('http://localhost:3001/cart/addtocart', data).then((res) => {
    //   alert('product added to cart')
    // })

    //getCart()
  }

  const navigate = useNavigate()

  const getCart = () => {

    navigate('/cart')
  }



  useEffect(() => {

    getAllProducts()

  }, [count])

  return (
    <div>
      <AppContext.Provider value={{ id }} >
        <Cart />
      </AppContext.Provider>


      <div>
        {
          loader ? <h1>Loading...</h1> : null
        }
        <span>
          <h1> ClipDart </h1>

        </span>
        <span>
          <button onClick={() => getCart()}>Cart</button>

        </span>

        <table border='2'>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th> Add to Cart</th>
          </tr>
          {
            products?.map((p) => {
              return (
                <tr>
                  <th scope="row">{p._id}</th>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <a
                      onClick={() => {
                        addToCart(p._id);
                      }}
                      className="btn btn-outline-secondary"
                    >
                      Add to Cart
                    </a>
                  </td>

                </tr>
              );
            })
          }

        </table>
      </div>

    </div>

  )
}
