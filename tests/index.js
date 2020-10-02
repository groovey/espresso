let product = {
    data() {
        return {
            name: 'Product 1'
        };
    },
    flag: false,
    test() {
        console.log('helow');
    },
    index: function () {
        this.test();
    },
};

product.index();