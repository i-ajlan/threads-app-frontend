import { Ellipsis, Instagram } from "lucide-react"
import AvatarCustom from "./AvatarCustom"
import profilePicture from '/profilePicture.jpg'

const UserHeader = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between ">
        <div>
          <p className="text-4xl font-bold">Aristide Jean</p>
          <p className="text-xs mt-1">Aristide Jean <span className="bg-slate-800 text-gray-500 p-1 rounded-sm">threads.net</span></p>
        </div>
        <AvatarCustom src={profilePicture}/>
      </div>
      <div>
        Student, rudn, web-developper, full stack
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          3.2k followers <span>.</span> instagram.com
        </div>
        <div className="flex gap-0.5 items-center">
          <div className="hover:bg-slate-700 p-2 rounded-full cursor-pointer">
            <Instagram /> 
          </div>
          <div className="hover:bg-slate-700 p-2 rounded-full cursor-pointer">
            <Ellipsis/>
          </div>
    
        </div>
      </div>
      <div className="flex items-center justify-items-center [&>p]:border-b-2 dark:hover:[&>p]:border-b-white  hover:[&>p]:border-b-black">
        <p className="flex-1 text-center">Threads</p>
        <p className="flex-1 text-center ">Replies</p>
      </div>
    </div>
  )
}
export default UserHeader