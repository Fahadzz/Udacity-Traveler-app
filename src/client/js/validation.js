// TODO: make the validation appear under the input box.
const validateArr = [];
exports.inputValidation = (inp) => {
    // text Only
    const expression = /\b[^\d\W]+\b/;
    const regex = new RegExp(expression);
    // Conditions
    // check input is empty
    const empty = inp === "" || inp === null ? true : false;
    const exist = validateArr.includes(inp) ? true : false;
    const text = !inp.match(regex) ? true : false;

    if (empty || text || exist) {
        console.log(
            "City input is empty OR text includes unrecognizable characters OR item already exists!!"
        );
        console.log(validateArr);
        return false;
    } else {
        validateArr.push(inp);
        console.log(validateArr);
        return true;
    }
};


exports.removeFromValidation = (city) => {
    let idx = validateArr.indexOf(city);
    validateArr.splice(idx, 1)
    console.log(validateArr);
}
