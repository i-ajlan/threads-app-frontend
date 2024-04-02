import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Layout from "./components/Layout"

const AppPage = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/:username' element={<UserPage/>}/>
        <Route path='/:username/post/:pid' element={<PostPage/>}/>
      </Route>
    </Routes>
  )
}

export default AppPage