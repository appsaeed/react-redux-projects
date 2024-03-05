import { Route, Routes } from 'react-router-dom'
import Homepage from './pages'
import Nopage from './pages/Nopage'
import Shop from './pages/shop'
import Cart from './pages/shop/Cart'
import Navbar from './pages/shop/components/Navbar'
import TodosPages from './pages/todos/Index'

export default function Router() {
    return (
        <Routes>
            {/* home page routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="shop" element={<Navbar />}>
                <Route index element={<Shop />} />
                <Route path='cart' element={<Cart />} />
            </Route>
            <Route path="todos" element={<TodosPages />} />

            {/* not found page */}
            <Route path="/*" element={<Nopage />} />
        </Routes>
    )
}
