import icFilter from "src/assets/ic_filter.png"
import { useEffect, useState } from "react"
import storeAPI from "src/services/store.api"
import ItemFilter from "src/conponents/ItemFilter"
import ItemProduct from "src/conponents/ItemProduct"
import { Product } from "src/types/util.type"
import { useNavigate } from "react-router-dom"
import Loading from "src/conponents/Loading"
import HeaderBar from "src/conponents/HeaderBar"





function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [listCategory, setListCategory] = useState<string[]>([])
  const [listProduct, setListProduct] = useState<Product[]>([])

  const fetchData = async () => {
    setIsLoading(true);
    const res1 = await storeAPI.getAllCategory();
    const res2 = await storeAPI.getAllProduct();
    setListCategory(res1);
    setListProduct(res2);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    isLoading ? <Loading /> :
      <main className="w-full">
        <HeaderBar />

        <div className="flex flex-row w-[1200px] mx-auto my-[32px]">
          <div className="w-[190px]">
            <div className="flex flex-row items-center gap-[8px]">
              <img className="w-[16px] h-[16px] object-contain" src={icFilter} alt="icFilter" />
              <div className="font-bold text-[#000] text-[16px]">SEARCH FILTER</div>
            </div>
            <div className="text-[#000] text-[15px] py-[8px]">By category</div>
            {
              listCategory.map((item, index) => (
                <ItemFilter value={item} key={index} />
              ))
            }
          </div>
          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-5 gap-[12px] justify-items-center">
              {
                listProduct.map((item, index) => (
                  <ItemProduct data={item} key={index} onClick={() => navigate(`/product/${item.id}`)} />
                ))
              }
            </div>
          </div>
        </div>

        <div className="w-[1200px] mx-auto mt-[48px]">
          <div className="w-full h-[1px] bg-[#0000008A]" />
          <div className="text-[#0000008A] text-[16px] py-[24px]">© 2024 Shopaa. All Rights Reserved .</div>
        </div>
      </main>
  )
}

export default Home