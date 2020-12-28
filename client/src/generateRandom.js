    //randomly selects which present to display to the user
    export const generateRandomNumber = () => {
        //selects a number between 0 - 99 inclusive
        const maxNum = 100;
        return Math.floor(Math.random() * Math.floor(maxNum));
    };