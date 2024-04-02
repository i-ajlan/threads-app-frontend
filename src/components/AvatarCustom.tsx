import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


type Props = {
  small?: boolean,
  src: string
}
const AvatarCustom = ({small=false, src}:Props) => {
  return (
    
    <Avatar className={!small?'size-12':'size-4'}>
        <AvatarImage className='object-contain' src={src}/>
        <AvatarFallback>AJ</AvatarFallback>
    </Avatar>
  )
}
export default AvatarCustom