
import { useState } from "react"
import AvatarCustom from "./AvatarCustom"
import Controls from "./Controls"
import { Separator } from "./ui/separator"

type Props = {
    comment: string,
    createdAt: string,
    likes: number,
    username: string,
    userAvatar: string
}

const Comment = ({comment, createdAt, likes, username, userAvatar}: Props) => {
    const [liked, setLiked] = useState(false);
  return (
    <div className="flex gap-1">
        <div>
            <AvatarCustom src={userAvatar}/>
        </div>
        <div className="flex-1">
            <div className="flex justify-between">
                <p className="font-bold">{username}</p>
                <p className="text-xs text-gray-500">{createdAt}</p>
            </div>
            <div>
                <p>{comment}</p>
                <Controls liked={liked} setLiked={setLiked}/>
                <p>{!liked? likes:likes+1}</p>
                <Separator/>
            </div>
        </div>
    </div>
  )
}
export default Comment