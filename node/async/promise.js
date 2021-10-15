// Transform callback to Promises

// const userLeft = false;
// const userMeme = false;
// const watchTutorial = (callback, errorCallback) => {
//     if (userLeft) {
//         errorCallback({
//             name: "User left",
//             message: ":("
//         });
//     } else if (userMeme) {
//         errorCallback({
//             name: "User watching memes",
//             message: "Memes is better than tutorial"
//         });
//     } else {
//         callback("User pays attentions.");
//     }
// }

// watchTutorial((message) => {
//     console.log("Success: " + message);
// }, (error) =>  {
//     console.log("Fail: " + error.name + ". " + error.message);
// });


const userLeft = false;
const userMeme = false;

const watchTutorialPromise = new Promise((resolve, reject) =>{
    if (userLeft) {
        reject("User left");
    } else if (userMeme) {
        reject("User meme");
    } else {
        resolve("User pays attentions.");
    }
});

const examPassPromise = new Promise((resolve, reject) => {
    if (userLeft || userMeme) {
        reject("fail");
    } else {
        resolve("pass");
    }
});

function giftPromise(status) {
    return new Promise((resolve, reject) => {
        if (status == "pass") {
            resolve("Here is your free gift")
        } else {
            reject("No free gift for you")
        }
    });
}

watchTutorialPromise
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .then(_ => examPassPromise)
    .then((message) => {giftPromise(message)})
    .catch((error) => giftPromise(error))
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

    