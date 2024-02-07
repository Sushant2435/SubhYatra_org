const BASE_URL = process.env.REACT_APP_API_URL
const addToWishlist = async (product) => {
    try {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const combinedId = product._id.startsWith(userId) ? product._id : userId + '_' + product._id;
        const data = { userId, ...product, _id: combinedId };
        const response = await fetch(`${BASE_URL}/add-to-wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('Added to wishlist successfully');
        } else {
            console.error('Failed to add to wishlist:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
};
export default addToWishlist;
