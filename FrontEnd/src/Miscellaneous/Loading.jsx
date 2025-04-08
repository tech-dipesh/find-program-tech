import { infinity } from 'ldrs'
import React from 'react'
export default function Loading() {
  infinity.register()
  return (
    <React.Fragment>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-white shadow-lg rounded-xl">
      <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="black"
        ></l-infinity>
        </div>
    </React.Fragment>
  )
}