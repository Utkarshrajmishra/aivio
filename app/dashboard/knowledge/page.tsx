import QuickAction from "@/components/dashboard/knowledge/quick-action"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const Page=()=>{
    return(
        <section className="p-6 flex flex-col gap-6">
            <div className="flex  items-end justify-between">
            <div>
                <p className="text-2xl text-neutral-700">Knowledge Base</p>
                <p className="">Manage your website sources, documents and uploads here.</p>
            </div>
            <Button className="text-sm flex gap-1 "><Plus className="size-4"/> Add Knowledge</Button>
            </div>
            <QuickAction/>
        </section>
    )
}

export default Page