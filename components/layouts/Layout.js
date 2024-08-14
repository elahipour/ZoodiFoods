import Header from "../modules/Header"
import Footer from "../modules/Footer"
function Layout({children}) {
  return (
    <div className="max-w-[1000px] m-auto">
    <Header/>
    <div>{children}</div>
    <Footer/>
    </div>
  )
}

export default Layout