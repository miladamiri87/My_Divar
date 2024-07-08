import React from 'react'
import { useParams, useLocation, useNavigate } from "react-router-dom"

import { getOneAdvertisement } from '../data/data'
export default function ({id}) {
    let params = useParams()
    // console.log(params)
    // console.log(getOneAdvertisement(params.id))
    let adv = getOneAdvertisement(params.id)
  return (
    
   
    <div className='container_details_img'>
        <div className='container_img'>
            <img src="https://placehold.co/400" alt="" />
        </div>
        <div className='container_details'>
            <p>Title:{adv.product}</p>
            <hr />
            <p>Price: {adv.price}</p>
            <hr />
            <p>Description:{adv.product}</p>

        </div>
        

    </div>
  )
}
