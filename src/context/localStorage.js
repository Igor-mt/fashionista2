export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return undefined;
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (err) {

    }
};