const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return a-b;
};

// module.exports = add; //used only when one function is to be exported

// module.exports.add = add;
// module.exports.sub = sub;

module.exports = {add,sub};