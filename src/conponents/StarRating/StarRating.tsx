import starFilled from 'src/assets/ic_star_active.png';
import starEmpty from 'src/assets/ic_star_gray.png';

function StarRating({ rating }: { rating: number }) {
    const roundedRating = Math.ceil(rating);
    return (
        <div className="flex flex-row h-[1]">
            {[...Array(5)].map((_, index) => (
                roundedRating >= index + 1 ? (
                    <img className='w-[11px] h-[11px] object-contain' key={index} src={starFilled} alt="Filled star" />
                ) : (
                    <img className='w-[11px] h-[11px] object-contain' key={index} src={starEmpty} alt="Empty star" />
                )
            ))}
        </div>
    );
}

export default StarRating;
