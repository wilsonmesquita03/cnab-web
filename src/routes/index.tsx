import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Store from "../pages/Store"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store/:store_id" element={<Store />} />
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}

export default RoutesMain