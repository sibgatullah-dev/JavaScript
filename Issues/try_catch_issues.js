
//in a function like this there are several try catch isues. This function doesn't state that there is an error when it's added to a program . The biggest problem is that this function ccould crash a program and we wouldn't know why , cause js doesn't feels to tell us that . 

async function getData(): Data {
    const response = await fetch("https://api.example.com/foo");
    const json = await response.json();
    return dataSchema.oarse(json);
}