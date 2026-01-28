"use client";
import { useState } from "react";
import { File, Globe, Upload } from "lucide-react";
import { AddWebsite } from "./modals/add-website-modal";
import { KnowledgeSource } from "@/types/knowledge-source";

export interface QuickActionStateInterface {
  addWesbite: boolean;
  uploadFile: boolean;
  createDocument: boolean;
}

const QuickAction = () => {
  const [isModalOpen, setIsModalOpen] = useState<QuickActionStateInterface>({
    addWesbite: false,
    uploadFile: false,
    createDocument: false,
  });

  const [existingSources,setExistingSources]=useState<KnowledgeSource[]>([])
  const [loading, setLoading]=useState(false)

  const addWebsite=async()=>{
    setLoading(true)
   try {
      // let resp;
      // if(state?.type==="file" && state?.file){
      // const formData=new FormData()
      // formData.append("type","upload");
      // formData.append("file",state?.file)

      // resp=await fetch("/api/knowledge/store",{
      //   method:"POST",
      //   body:formData
      // })
      // } else{
      //   resp=await fetch("/api/knowledge/store",{
      //     method:"POST",
      //     headers:{
      //       "Content-Type":"application/json"
      //     },
      //     body:JSON.stringify(state)
      //   })
      // }

      // if(!resp?.ok){
      //   console.log("Failed to add website")
      //   return
      // }

      // const res=await fetch("/api/knowledge/fetch")
   } catch (error) {
    
   }finally{
    setLoading(false)
    setIsModalOpen((prev)=>({
      ...prev,
      addWesbite:false
    }))
   }
  }

  return (
    <div className="flex gap-4 justify-between">
      <section
        onClick={() =>
          setIsModalOpen((prev) => ({ ...prev, addWesbite: true }))
        }
        className="p-5 rounded-lg relative flex-1 overflow-hidden flex flex-col items-center justify-center bg-white hover:bg-orange-50/40 border border-neutral-300 hover:border-orange-300 transition-colors cursor-pointer"
      >
        <div className="bg-orange-100  border border-orange-400 p-3 w-fit h-fit rounded-full text-orange-400">
          <Globe className="size-4" />
        </div>
        <div className="text-center mt-3">
          <p className=" text-neutral-800 text-lg">Add Website</p>
          <p className="text-sm mt-1 text-neutral-500">
            Crawl your website or specific pages to automatically keep your
            knowledge base in sync.
          </p>
        </div>
      </section>

      <section className="p-5 rounded-lg relative flex-1 flex flex-col items-center justify-center bg-white hover:bg-orange-50/40 border border-neutral-300 hover:border-orange-300 transition-colors cursor-pointer">
        <div className="bg-orange-100 border border-orange-400 p-3 w-fit h-fit rounded-full text-orange-400">
          <Upload className="size-4" />
        </div>
        <div className="text-center mt-3">
          <p className="text-lg  text-neutral-800">Upload File</p>
          <p className="text-sm mt-1 text-neutral-500">
            Upload documents, PDFs, or text files to expand your knowledge base
            content.
          </p>
        </div>
      </section>

      <section className="p-5 rounded-lg flex-1 flex flex-col items-center justify-center bg-white hover:bg-orange-50/40 border border-neutral-300 hover:border-orange-300 transition-colors cursor-pointer">
        <div className="bg-orange-100 border border-orange-400 p-3 w-fit h-fit rounded-full text-orange-400">
          <File className="size-4" />
        </div>
        <div className="text-center mt-3">
          <p className="text-lg text-neutral-800">Create Document</p>
          <p className="text-sm mt-1 text-neutral-500">
            Start writing a new document from scratch to add custom content to
            your knowledge base.
          </p>
        </div>
      </section>
      <AddWebsite isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} existingSources={existingSources} loading={loading} addWebsite={addWebsite}/>
    </div>
  );
};

export default QuickAction;
