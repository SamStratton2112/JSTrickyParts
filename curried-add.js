
function curriedAdd(total) {
    // handle inital param empty 
    if(total === undefined || total === NaN || total === null) return 0;
    // if a number is passed return a new function, else return current added value  
    return function add(num){
        if(num === undefined) return total;
        total += num;
        return add;
    }
}

module.exports = { curriedAdd };
