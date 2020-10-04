const path = require('path');
var pathinfo = {
    base() {
        return process.cwd();
    },
    resources(folder) {
        return path.join(this.base(), 'resources', folder);
    }
};

console.log(pathinfo.resources('views'));



// let product = {
//     data() {
//         return {
//             name: 'Product 1'
//         };
//     },
//     flag: false,
//     test() {
//         return process.cwd();
//     },
//     index: function () {
//         console.log(this.test());
//     },
// };

// product.index();