function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location == "Google"){
            resolve("Google say Hi");
        } else{
            reject("We only talk to Google");
        }
    });
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("Processing request");
        resolve("Extra Information + " + response)
    });
}

function processWaiting(){
    return new Promise((resolve, reject) =>{
        console.log("Waiting...");
        setTimeout(() => {
            resolve("Done waiting");
        }, 3000)
    })
}


// makeRequest("Facebook")
// .then((response) => {
//     console.log("Response received");
//     return processRequest(response)
// })
// .then((response) => console.log(response))
// .catch((error) => console.log(error))

async function doWork() {
    try{
        const wait = await processWaiting();
        console.log(wait);
        const response = await makeRequest("Google");
        console.log("Response Received");
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (err) {
        console.log("error: "+ err);
    }
}

doWork();