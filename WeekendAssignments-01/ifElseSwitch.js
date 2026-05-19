function launchBrowser(browserName = "Chrome")

{
    if (browserName === "Chrome")   //Using strict operator
    {
        console.log("Chrome browser launched")
    }
    else{
        console.log("Edge browser launched")
    }

}

function runTest(testType = "sanity")

{
    switch (testType)
    {
        case "smoke":
            console.log("Smoke testing executed")
            break;
        case "sanity":
            console.log("Sanity testing executed")
            break;
        case "regression":
            console.log("Regression testing executed")
            break;
        default:
            console.log("Smoke testing executed")
            break;
    }
}

launchBrowser();

runTest();