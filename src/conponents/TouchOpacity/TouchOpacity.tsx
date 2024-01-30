import { ReactNode } from "react"

type Props = {
    onClick?: () => void
    className?: string
    children?: ReactNode
}
function TouchOpacity({ onClick, className, children }: Props) {
    return (
        <div onClick={() => { onClick && onClick(); }} className={`cursor-pointer hover:opacity-70 ${className}`}>
            {children}
        </div>
    )
}

export default TouchOpacity