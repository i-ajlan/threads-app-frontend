import { Heart, MessageCircle, RefreshCcw, Send} from "lucide-react"

type Props = {
  liked: boolean,
  setLiked: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls = ({liked, setLiked}:Props) => {
    
  return (
    <div onClick={(e)=>e.preventDefault()} className="space-y-1">
      <div  className="flex items-center gap-2">
          <Heart className={`${liked?"stroke-red-600 fill-red-600":""}`} onClick={()=>{setLiked(!liked)}} />
          <MessageCircle/>
          <RefreshCcw/>
          <Send/>
      </div>
    </div>
  )
}
export default Controls