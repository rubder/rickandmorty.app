import Navigeitionbar from "../componentes/Navigeitionbar";
import Footer from "../componentes/Footer";
import Createform from "../componentes/Createform";

export default function create() {
  return (
    <div>
        <Navigeitionbar/>
        <div className="d-flex justify-content-center my-6">
            <Createform/>
        </div>
        <Footer/>
    </div>
  )
}
