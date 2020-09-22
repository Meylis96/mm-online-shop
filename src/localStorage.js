export const loadState = () => {
        try{
            const serializedState = localStorage.getItem('state');
            setTimeout(() => {
                localStorage.clear()
            }, 3600 * 1000)
            if(serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        // setTimeout(() => {
        //     localStorage.clear()
        // }, 10000)
    } catch(err){
        
    }
}