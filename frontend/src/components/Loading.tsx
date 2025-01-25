import Image from "next/image";
import loadinganimation from "@/assets/loading_animation.png"

export default function Loading({ ...props }) {
  return (
    <div className="p-5 bg-[#C8CAE1]/90 h-full rounded-3xl flex " >
      <Image src={loadinganimation} alt={"loading..."} className="animate-spin items-center justify-center">
      </Image>
    </div>
  )
}

