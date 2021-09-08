import { FC } from "react"
import MainFooter from "./MainFooter"
import MainNavigation from "./MainNavigation"

interface MainLayoutProps {
    children?: React.ReactNode;
  }


const MainLayout : FC<MainLayoutProps> = (props) => {
    
    return (
        <div className="min-h-screen bg-white dark:bg-black">
        <MainNavigation />
        {props.children}
        <MainFooter />
        </div>
    )
}

export default MainLayout