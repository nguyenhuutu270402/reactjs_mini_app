import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderBar from "src/conponents/HeaderBar";
import storeAPI from "src/services/store.api";
import { Product } from "src/types/util.type";

function Detail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [dataProduct, setdataProduct] = useState<Product>()

  const fetchData = async () => {
    setIsLoading(true);
    const res = await storeAPI.getOneProduct(Number(id));
    setdataProduct(res);
    setIsLoading(false);
    console.log(res);
  }

  useEffect(() => {
    return () => {
      fetchData();
    }
  }, [])

  return (
    <main className="w-full">
      <HeaderBar />
      <div className="w-[1200px] flex flex-col mx-auto">

      </div>
    </main>

  )
}

export default Detail