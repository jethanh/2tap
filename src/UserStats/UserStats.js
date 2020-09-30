import React from 'react'
import {useParams} from 'react-router-dom';
const UserStats = ({user, tag}) => {
    let { slug } = useParams();
  return (
    <>
        <div>Hello {slug}, we are under construction :D</div>
    </>
  )
}

export default UserStats