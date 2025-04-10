import { infinity } from 'ldrs'
import React from 'react'
export default function Loading() {
  infinity.register()
  return (
    <React.Fragment>
      <div className="fixed top-1/2 left-2/4">
      <l-infinity
        size="200"
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