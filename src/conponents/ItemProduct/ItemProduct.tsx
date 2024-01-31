import { Product } from "src/types/util.type"
import StarRating from "../StarRating"
import imgLayer from "src/assets/img_layer.png"
import TouchOpacity from "../TouchOpacity"

type Props = {
    data: Product
    onClick?: () => void
}

function ItemProduct({ data, onClick }: Props) {
    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <TouchOpacity onClick={() => { onClick && onClick() }}>
            <div className="flex flex-col bg-white h-fit w-[100%] rounded-[2px] shadow-custom">
                <div className="w-[100%] aspect-[1] flex relative p-[1px]">
                    <img className="w-[100%] aspect-[1] object-contain" src={data.image} alt="nameee" />
                    <img className="w-[100%] aspect-[1] object-contain flex absolute" src={imgLayer} alt="nameee" />
                </div>
                <div className="px-[8px] py-[8px]">
                    <div className="text-[#000] text-[13px] line-clamp-2 h-[36px]">{data.title}</div>
                    <div className="flex flex-row items-center my-[4px]">
                        <div className="underline text-[10px] text-[#f06556]">đ</div>
                        <div className="text-[16px] text-[#f06556]">{data.price}</div>
                    </div>
                    <div className="flex flex-row items-center mb-[2px]">
                        <StarRating rating={data.rating.rate} />
                        <div className="text-[12px] text-[#000] pl-[4px]">{data.rating.count} reviews</div>
                    </div>
                    <div className="text-[#000] text-[12px] font-[200] line-clamp-1">{capitalizeFirstLetter(data.category)}</div>
                </div>
            </div>
        </TouchOpacity>

    )
}

export default ItemProduct