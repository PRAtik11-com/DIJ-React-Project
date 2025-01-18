import { Route, Routes } from "react-router"
import Home from "../Component/Home"
import CameraDrones from "../Component/CameraDrones"
import Explore from "../Component/Explore"
import Handheld from "../Component/Handheld"
import Power from "../Component/Power"
import Specialized from "../Component/Specialized"
import Support from "../Component/Support"
import WheretoBuy from "../Component/WheretoBuy"
import Buy from "../Component/Buy"
import Private from "../Component/Private"
import Login from "../Component/Login"
import Description from "../Component/Description"

const Mainroutes = () => {
  return (
    <div>
      {/* <h1>mainroutes</h1> */}

      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="CameraDrones" element={
          <Private>
            <CameraDrones />
          </Private>}></Route>
        <Route path="/Explore" element={
          <Private>
            <Explore />
          </Private>
          }></Route>
        <Route path="/Handheld" element={
          <Private>
            <Handheld />
          </Private>
          }></Route> 
        <Route path="/Power" element={
          <Private>
            <Power />
          </Private>
          }></Route>
        <Route path="/Specialized" element={
          <Private>
            <Specialized />
          </Private>
          }></Route>
        <Route path="/Support" element={<Support />}></Route>
        <Route path="/WheretoBuy"  element={<WheretoBuy />}></Route>
        <Route path="/Buy"  element={<Buy />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/Description/:id' element={<Description />}></Route>

      </Routes>
    </div>
  )
}

export default Mainroutes
