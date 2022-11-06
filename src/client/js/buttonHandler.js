import axios from "axios";

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    console.log("from the submit");
    // store user inputs to variables
    const location = document.getElementById("location").value.toLowerCase().trim()
    const date = document.getElementById("date").value

    // send the data to the server
    const result = Client.inputValidation(location);
    if (!result) {
        console.log("Input error");
    } else {
        postData(location, date);
    }
});

const postData = (location, date) => {
    axios
        .post("/data", { location, date })
        .then((res) => {
            console.log(res.data);
            const data = res.data;
            Client.generateCardServer(data);
        })
        .catch((e) => {
            console.log(e);
        });
};

export { btn };
