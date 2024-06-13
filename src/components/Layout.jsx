import { Outlet } from "react-router-dom";
import  Footer  from './Footer'
import  Header from './Header'

//Display what the user will see in the entire page. This makes Header and Footer always visible.
export default function Layout() {

    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}