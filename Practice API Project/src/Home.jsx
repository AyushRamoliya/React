import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataSlice, fetchApi } from './Components/DataSlice';
import Nav from './Nav';

export default function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi())
    }, [dispatch])

    const [show, setShow] = useState(null);

    const handleViewMore = (id) => {
        setShow((prevId) => prevId === id ? null : id);
    }

    const productData = useSelector((state) => state.dataKey);

  
    return (
        <div>

            <Nav />
            <br />
            {/*  */}
            <br />
            <div className='flex gap-[30px] ms-[1%] flex-wrap border w-[98%]'>

                {productData.loading &&
                    <p>Loading...</p>
                }
                {
                    productData.data &&
                    productData.data.map((product) => {
                        return (
                            <div className='w-[100%] sm:w-[48%] md:w-[32%] lg:w-[23%] mt-[30px] border border-black pt-[30px] rounded-[10px]'>
                                <div className="imageDiv flex justify-center">
                                    <img className='h-[30vh] p-2' src={product.image} alt="" />
                                </div>

                                <div className="txt p-2 mt-3">
                                    <p>{product.title}</p>
                                    <p>{product.category}</p>
                                    <p>₹ {product.price} ({product.rating.count})</p>

                                    {
                                        show === product.id && (
                                            <p>{product.description}</p>
                                        )
                                    }

                                    <p className='text-blue-800 font-semibold cursor-pointer' onClick={() => handleViewMore(product.id)}>
                                        {show === product.id ? "View Less..." : "View More..."}
                                    </p>

                                    <button className='h-[45px] w-[100%] bg-fuchsia-800 rounded-[6px] text-white'>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
