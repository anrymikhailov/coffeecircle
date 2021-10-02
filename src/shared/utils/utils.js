export const sortByName = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : 1;
};

export const sortByPrice = (a, b) => {
    return a.price - b.price;
};