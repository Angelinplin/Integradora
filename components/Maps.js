import React from "react"
import { Map, Marker } from "pigeon-maps"

export function Maps() {
  return (
    <div className="flex flex-col justify-center items-center ">
        <div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Studio location
            </h2>
        </div>
        <div className="mt-2 ">

            <Map height={300} width={800} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    </div>
  )
}
