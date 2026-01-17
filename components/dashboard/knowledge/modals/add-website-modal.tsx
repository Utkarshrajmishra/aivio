import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuickActionStateInterface } from "../quick-action";
import { Dispatch, SetStateAction } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { File, Globe } from "lucide-react";

interface AddWebsiteProps {
  isModalOpen: QuickActionStateInterface;
  setIsModalOpen: Dispatch<SetStateAction<QuickActionStateInterface>>;
}

export function AddWebsite({ isModalOpen, setIsModalOpen }: AddWebsiteProps) {
  const closeModal = () => {
    setIsModalOpen((prev) => ({ ...prev, addWesbite: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Dialog open={isModalOpen.addWesbite} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="">
            <DialogTitle className="font-host">Add New Source</DialogTitle>
            <DialogDescription className="font-host text-muted-foreground">
              Choose a content type to train your assistant.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-3 font-host">
            <Tabs defaultValue="website" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger className="font-semibold text-neutral-800" value="website">Website</TabsTrigger>
                <TabsTrigger value="text" className="text font-semibold text-neutral-800">Q&A / Text</TabsTrigger>
                                <TabsTrigger value="file" className="text font-semibold text-neutral-800">Upload File</TabsTrigger>

              </TabsList>

              <TabsContent value="website" className="space-y-3 font-host mt-3">
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="font-medium text-orange-500 mb-1 flex">
                 Crawl Website
                  </p>
                  <p className="text-sm text-orange-400">
                    Enter a website URL to crawl significantly or add a specific page
                    link to provide focused content.
                  </p>
                </div>
                
                <div className="space-y-0">
                  <Label htmlFor="website-url" className="text-sm font-normal text-neutral-800">
                    Website URL
                  </Label>
                  <Input 
                    id="website-url"
                    placeholder="https://example.com"
                    className="h-11"
                    
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="text" className="mt-3">
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="font-medium text-orange-500 mb-1 flex">
                    Add Text Content
                  </p>
                  <p className="text-sm text-orange-400">
                   Paste text content directly for your assistant to learn from such as FAQ's, policies or internal notes.
                  </p>
                </div>
                   <div className="space-y-0 mt-4">
                  <Label htmlFor="website-url" className="text-sm font-normal text-neutral-800">
                  Title
                  </Label>
                  <Input 
                    id="website-url"
                    placeholder="Refund Policy"
                    className="h-11"
                    
                  />
                </div>
                <div className="space-y-0 mt-4">
                  <Label htmlFor="text-content" className="text-sm font-normal text-neutral-800">
                    Text Content
                  </Label>
                  <textarea 
                    id="text-content"
                    placeholder="Paste or type your content here..."
                    className="w-full min-h-[120px] p-3 border rounded-md text-sm"
                    rows={4}
                  />
                </div>
              </TabsContent>

               <TabsContent value="file" className="mt-3">
                <div className="bg-orange-50 border-dashed border border-orange-400 p-4 rounded-lg flex items-center justify-center flex-col h-50">
                  <p className="font-medium flex-col items-center text-orange-500 mb-1 flex">
                  <File className="size-6"/>  Click to upload file
                  </p>
                  <p className="text-sm text-orange-400 text-center">
                    CSV (max 10MB)
                  </p>
                </div>
                 
              </TabsContent>
            </Tabs>
          </div>

          <DialogFooter className="gfont-host ">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full sm:w-auto text-sm font-host"
                
              >
                Cancel
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              className="w-full sm:w-auto text-sm font-host"
            >
              Add Source
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}