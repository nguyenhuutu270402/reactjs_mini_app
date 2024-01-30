type Props = {
    value: string
    onClick?: () => void
    isActive?: boolean
}
function ItemFilter({ value, onClick, isActive }: Props) {
    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="flex flex-row items-center gap-[8px] py-[6px]">
            <input type="checkbox" className="w-[13px] h-[13px]" onChange={() => { onClick && onClick() }} checked={isActive} />
            <div className="text-[#000] text-[15px] u">{capitalizeFirstLetter(value)}</div>
        </div>
    )
}

export default ItemFilter