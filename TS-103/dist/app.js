"use strict";
// a comment
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
function clickHandler(message) {
    let userName = 'Max';
    console.log('Clicked! ' + message);
}
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', clickHandler.bind(null, "Hello"));
}
//# sourceMappingURL=app.js.map