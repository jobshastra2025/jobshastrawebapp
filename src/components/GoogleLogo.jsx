import React, { memo } from 'react'

const GoogleLogo=()=>{
  return (
      <img
            className="w-[20px] h-[20px] mb-[3px] mr-3 rounded-full"
            src="/images/google.png"
      />
  )
}

export default memo(GoogleLogo);