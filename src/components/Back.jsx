import React from 'react'
import {MdArrowBack} from 'react-icons/md'


function Back({setToggleBar}) {
  return (
    <div onClick={() => setToggleBar(false)} className="back"><MdArrowBack /></div>
  )
}

export default Back