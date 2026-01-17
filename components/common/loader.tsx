import { LoaderCircle } from "lucide-react"

const Loader=()=>{
    return(
        <section className="w-full h-full flex items-center  animate-spin justify-center">
            <LoaderCircle className="size-6 text-neutral-500"/>
        </section>
    )
}

export default Loader