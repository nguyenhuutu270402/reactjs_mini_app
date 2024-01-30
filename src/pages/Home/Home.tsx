import TouchOpacity from "src/conponents/TouchOpacity"
import icFB from "src/assets/ic_fb.png"
import icIG from "src/assets/ic_ig.png"
import icBell from "src/assets/ic_bell.png"
import icHelp from "src/assets/ic_question.png"
import icLanguage from "src/assets/ic_internet.png"
import icArrowDown from "src/assets/ic_arrow_down.png"
import icSearch from "src/assets/ic_search.png"
import logoShopaa from "src/assets/ic_shopaa.png"
import icCart from "src/assets/ic_cart.png"
import icFilter from "src/assets/ic_filter.png"
import imgLayer from "src/assets/img_layer.png"

import { useEffect, useState } from "react"
import storeAPI from "src/services/store.api"
import ItemFilter from "src/conponents/ItemFilter"





function Home() {
  const [listCategory, setListCategory] = useState<string[]>([])
  const fetchData = async () => {
    const res1 = await storeAPI.getAllCategory();
    setListCategory(res1);
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <main className="w-full">
      <div className="w-full flex flex-col bg-gradient-to-b from-[#f33d2d] to-[#ff6633]">
        <div className="w-[1200px] flex flex-col mx-auto">
          <div className="w-full flex flex-row justify-between my-[6px]">
            <div className="flex flex-row gap-[8px] items-center justify-center">
              <TouchOpacity>
                <div className="text-white text-[13px]">Seller Centre</div>
              </TouchOpacity>
              <div className="h-[13px] w-[2px] mt-[2px] bg-[#ffffff49]" />
              <TouchOpacity>
                <div className="text-white text-[13px]">Start Selling</div>
              </TouchOpacity>
              <div className="h-[13px] w-[2px] mt-[2px] bg-[#ffffff49]" />
              <TouchOpacity>
                <div className="text-white text-[13px]">Dowdload</div>
              </TouchOpacity>
              <div className="h-[13px] w-[2px] mt-[2px] bg-[#ffffff49]" />
              <div className="text-white text-[13px]">Follow us on</div>
              <TouchOpacity>
                <img className="w-[16px] mt-[2px]" src={icFB} alt="ic_fb" />
              </TouchOpacity>
              <TouchOpacity>
                <img className="w-[16px] mt-[2px]" src={icIG} alt="ic_ig" />
              </TouchOpacity>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-center">
              <TouchOpacity>
                <div className="flex flex-row gap-[4px] items-center">
                  <img className="w-[16px] h-[16px] object-cover" src={icBell} alt="ic_bell" />
                  <div className="text-white text-[13px]">Notifications</div>
                </div>
              </TouchOpacity>
              <TouchOpacity>
                <div className="flex flex-row gap-[4px] items-center">
                  <img className="w-[16px] h-[16px] object-cover" src={icHelp} alt="icHelp" />
                  <div className="text-white text-[13px]">Help</div>
                </div>
              </TouchOpacity>
              <TouchOpacity>
                <div className="flex flex-row gap-[4px] items-center">
                  <img className="w-[16px] h-[16px] object-cover" src={icLanguage} alt="icLanguage" />
                  <div className="text-white text-[13px]">English</div>
                  <img className="w-[12px] h-[12px] object-cover mt-[4px]" src={icArrowDown} alt="icArrowDown" />
                </div>
              </TouchOpacity>
              <div className="mr-[8px]" />
              <TouchOpacity>
                <div className="text-white text-[13px]">Sign Up</div>
              </TouchOpacity>
              <div className="h-[13px] w-[2px] mt-[2px] bg-[#ffffff49]" />
              <TouchOpacity>
                <div className="text-white text-[13px]">Login</div>
              </TouchOpacity>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-[16px] mb-[24px]">
            <img className="w-[145px] object-contain" src={logoShopaa} alt="logoShopaa" />
            <div className='w-[840px] p-[4px] bg-white rounded-[2px] flex flex-row'>
              <input className='w-full pl-[16px] outline-none  text-[#000] placeholder-gray-400 text-[14px]'
                type='text'
                placeholder='Tìm kiếm' />
              <TouchOpacity>
                <div className="px-[20px] py-[8px] bg-[#fb5533] rounded-[2px]">
                  <img className="w-[16px] h-[16px] object-contain" src={icSearch} alt="icSearch" />
                </div>
              </TouchOpacity>
            </div>
            <TouchOpacity>
              <img className="w-[24px] h-[24px] object-cover" src={icCart} alt="icCart" />
            </TouchOpacity>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[1200px] mx-auto">
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
        <div className="flex flex-col flex-1 bg-black ml-[24px]">
          <div className="grid grid-cols-5 gap-[16px] justify-items-center">
            <div className="bg-red-500 w-[100%] aspect-[1]"></div>


            <div className="flex flex-col bg-white aspect-[0.5] w-[100%]">
              <div className="w-[100%] aspect-[1] flex relative">
                <img className="w-[100%] aspect-[1] object-contain" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="nameee" />
                <img className="w-[100%] aspect-[1] object-contain flex absolute" src={imgLayer} alt="nameee" />

              </div>
              <div className="px-[8px] py-[8px]">
                <div className="text-[#000] text-[13px] line-clamp-2">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                <div className="">đ</div>
              </div>
            </div>


            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
            <div className="bg-red-500 h-[200px] w-[100%]"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home