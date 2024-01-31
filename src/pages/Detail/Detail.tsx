import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderBar from "src/conponents/HeaderBar";
import storeAPI from "src/services/store.api";
import { Product } from "src/types/util.type";
import starFilled from 'src/assets/ic_star_active.png';
import starEmpty from 'src/assets/ic_star_gray.png';
import utils from "src/utils/utils";
import icMinus from "src/assets/ic_minus.png"
import icPlus from "src/assets/ic_plus.png"
import TouchOpacity from "src/conponents/TouchOpacity";

function Detail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [dataProduct, setdataProduct] = useState<Product>()
  const [quantity, setQuantity] = useState(1)

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

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const plusQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <main className="w-full">
      <HeaderBar />
      <div className="w-[1200px] flex flex-row mx-auto bg-white">
        <img className="w-[450px] h-[450px] object-contain m-[16px] shadow-custom" src={dataProduct?.image} alt="img" />
        <div className="flex flex-col flex-1 my-[16px] ml-[16px] mr-[32px]">
          <div className="text-[20px] text-[#000] font-[400]">{dataProduct?.title}</div>
          <div className="flex flex-row items-center gap-[12px] mt-[6px]">
            <div className="flex flex-row items-center">
              <div className="text-[16px] text-[#f06556] relative px-[4px]">
                {dataProduct?.rating.rate}
                <div className="absolute bottom-[0px] left-[4px] right-[4px] h-[1px] bg-[#f06556]"></div>
              </div>
              <div className="flex flex-row h-[1]">
                {[...Array(5)].map((_, index) => (
                  utils.roundedRating(dataProduct?.rating.rate ?? 0) >= index + 1 ? (
                    <img className='w-[16px] h-[16px] object-contain' key={index} src={starFilled} alt="Filled star" />
                  ) : (
                    <img className='w-[16px] h-[16px] object-contain' key={index} src={starEmpty} alt="Empty star" />
                  )
                ))}
              </div>
            </div>
            <div className="bg-[#00000030] h-[100%] w-[0.5px] " />
            <div className="flex flex-row items-center">
              <div className="text-[16px] text-[#000] relative px-[4px]">
                {dataProduct?.rating.count}
                <div className="absolute bottom-[0px] left-[4px] right-[4px] h-[1px] bg-[#000]" />
              </div>
              <div className="text-[14px] text-[#767676] ml-[2px]">Ratings</div>
            </div>
          </div>
          <div className="flex flex-row items-center py-[12px] px-[20px] mt-[16px] bg-[#fafafa]">
            <div className="text-[24px] text-[#f06556] relative">
              $
              <div className="absolute bottom-[4px] left-0 w-full h-[2px] bg-[#f06556]"></div>
            </div>
            <div className="text-[30px] text-[#f06556]">{dataProduct?.price}</div>
          </div>

          <div className=" py-[12px] px-[20px] flex flex-row">
            <div className="text-[14px] text-[#757575] w-[20%] ">Category</div>
            <div className="text-[14px] text-[#000] flex-1">{utils.capitalizeFirstLetter(dataProduct?.category ?? "")}</div>
          </div>
          <div className=" py-[12px] px-[20px] flex flex-row">
            <div className="text-[14px] text-[#757575] w-[20%] ">Desciption</div>
            <div className="text-[14px] text-[#000] flex-1">{dataProduct?.description}</div>
          </div>
          <div className=" py-[12px] px-[20px] flex flex-row">
            <div className="text-[14px] text-[#757575] w-[20%] ">Quantity</div>
            <TouchOpacity onClick={() => { minusQuantity() }}>
              <div className="border-[1px] border-solid border-[#00000029] rounded-s-[4px] flex justify-center items-center w-[30px] h-[30px]">
                <img className="w-[10px] h-[10px] object-contain" src={icMinus} alt="Minus" />
              </div>
            </TouchOpacity>
            <div className="border-y-[1px] border-solid border-[#00000029] flex justify-center items-center h-[30px] px-[16px]">
              <div className="text-[14px] text-[#000]">{quantity}</div>
            </div>
            <TouchOpacity onClick={() => { plusQuantity() }}>
              <div className="border-[1px] border-solid border-[#00000029] rounded-e-[4px] flex justify-center items-center w-[30px] h-[30px]">
                <img className="w-[10px] h-[10px] object-contain" src={icPlus} alt="Plus" />
              </div>
            </TouchOpacity>
          </div>
          <TouchOpacity className="w-fit h-fit mx-[20px] flex flex-row gap-[8px] bg-[#f0655611] border-[1px] border-solid border-[#f06556] rounded-[2px] px-[24px] py-[10px]">
            <img className="w-[24px] h-[24px]" src={icMinus} alt="cart" />
            <div className="text-[14px] text-[#f06556]">Add To Cart</div>
          </TouchOpacity>
        </div>
      </div>
    </main>

  )
}

export default Detail