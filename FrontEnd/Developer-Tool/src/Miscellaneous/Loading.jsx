import { infinity } from 'ldrs'
export default function Loading() {
  infinity.register()
  return (
    <>
      <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="black"
      ></l-infinity>
    </>
  )
}