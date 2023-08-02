
export const truncateText = (str, num) => {
    if (str) {
        if (str.length < num) {
            return str;
        } else {
            return str.slice(0, num) + "...";
        }
    }
}

export const trimYear = (date) => {

    return new Date(date).getFullYear();
}


export const runtime = (runtime) => {

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`
};


