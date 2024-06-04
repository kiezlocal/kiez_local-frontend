export const isLoggedIn = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        console.log("User is not logged in - no token found");
        return false;
    }

    try {
        const { default: jwt_decode } = await import('jwt-decode'); // Importuj jako default
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.log("User is not logged in - token expired");
            localStorage.removeItem('authToken');
            return false;
        }
        console.log("User is logged in");
        return true;
    } catch (error) {
        console.log("User is not logged in - error decoding token", error);
        return false;
    }
};
