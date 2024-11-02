
import Sidebar from "@/components/ui/Sidebar";
import Content from "@/components/Content";
import {LucideUser} from "lucide-react";


export default function Home() {

  return (
    <div className="relative">
          <div className="flex flex-col gap-3 md:grid grid-cols-12 bg-gray-100 p-3">
            <div className="col-span-3">
            <div className="flex gap-3">              
              <LucideUser className="text-blue-500"/>
              <span>Contacts</span>             
              
          </div>
            </div>

            {/*
            
                    <div  className="col-span-9">          

        </div>
            */}



      </div>
    <div className="grid grid-cols-12 bg-gray-100 h-screen p-5">
      <Sidebar/>
      <Content/>
    </div>
    </div>
  );
}
