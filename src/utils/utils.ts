

const utils = {
    capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    roundedRating(rating: number) {
        return Math.ceil(rating);
    }

}
export default utils