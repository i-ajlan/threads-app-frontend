import AvatarCustom from "@/components/AvatarCustom"
import profilePicture from '/profilePicture.jpg'
import { Ellipsis } from "lucide-react"
import post01 from '/post01.jpg'
import Controls from "@/components/Controls"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Comment from "@/components/Comment"
import { useState } from "react"

const PostPage = () => {
    const [liked, setLiked] = useState<boolean>(false);
  return (
    <div className="space-y-1 max-w-lg mx-auto">
      <div className="flex justify-between">
        <div className="flex items-center">
          <AvatarCustom src={profilePicture}/>
          <p>AristideJeanLoens</p>
        </div>
        <div className="text-gray-500 flex gap-1">
          <p>1d</p>
          <Ellipsis/>
        </div>
      </div>
      <p>Let's talk about Tech</p>
      

      <figure className="relative h-[200px]">
        <img src={post01} alt="Here is a image" className="absolute h-full w-full object-cover rounded-lg" />
      </figure>
      
      <Controls liked={liked} setLiked={setLiked}/>
      <Separator/>
      <div className="flex items-center justify-between">
        <p>Get the app here</p>
      <Button>
        Get
      </Button>
      </div>
      <Separator/>
      <Comment 
        comment="Look's good"
        createdAt='2d'
        likes={42}
        username='sallydose'
        userAvatar=''
      />
      <Comment 
        comment="Look's good"
        createdAt='2d'
        likes={42}
        username='sallydose'
        userAvatar=''
      />
      <Comment 
        comment="Look's good"
        createdAt='2d'
        likes={42}
        username='sallydose'
        userAvatar=''
      />
    </div>
  )
}
export default PostPage