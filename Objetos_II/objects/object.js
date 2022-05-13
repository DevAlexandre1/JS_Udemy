const obj = {};
Object.defineProperties(obj, {
    um: {enumerable: true, value: 1},
    dois: {enumerable: false, value: 2},
});
Object.keys(obj); 
Object.getOwnPropertyNames(obj);


