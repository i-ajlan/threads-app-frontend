import { Link } from "react-router-dom"
import AvatarCustom from "./AvatarCustom"
import { Separator } from "./ui/separator"
import { Ellipsis } from "lucide-react"
import Post01 from '/post01.jpg'
import Controls from "./Controls"
import profilePicture from '/profilePicture.jpg'
import { useState } from "react"

const Post = () => {
    const [liked, setLiked] = useState<boolean>(false);
  return (
    <Link to='/mark/post/123id' className="flex mt-1 max-w-lg mx-auto">
        

            <div className="flex flex-col items-center">
                <AvatarCustom src={profilePicture}/>
                <div className="flex-1">

                    <Separator orientation="vertical"/>
                </div>
                <div className="flex justify-items-center">
                    <AvatarCustom small src={profilePicture}/>
                    <div>
                        <AvatarCustom small src={profilePicture}/>
                        <AvatarCustom small src={profilePicture}/>
                    </div>
                </div>
            </div>
        
       <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
                <p>
                    Aristidejeanloens
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <p>1d</p>
                    <Ellipsis/>
                </div>
            </div>
            <div>
                Let's talk about tech
            </div>
            <figure className="relative h-[200px]">
                <img src={Post01} alt="Here is a image" className="absolute w-full h-full object-cover rounded-lg" />
            </figure>
            <Controls liked={liked} setLiked={setLiked}/>
            <div>
                <p className="text-xs text-gray-600">15 replies .{liked?480 + 1:480} likes</p>
            </div>
       </div>
    </Link>
  )
}
export default Post