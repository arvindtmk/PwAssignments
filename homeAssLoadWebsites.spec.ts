import test, {chromium, webkit} from "@playwright/test";

test('Load Redbus', async({}) => {

    const edgebrowser = await chromium.launch({channel: "msedge"})
    const safaribrowser = await webkit.launch()

    //to create a new browser context
    const edgecontext = await edgebrowser.newContext()
    const safaricontext = await safaribrowser.newContext()

    //to create a new page
    const edgepage = await edgecontext.newPage()
    const safaripage = await safaricontext.newPage()

    await edgepage.goto("https://www.redbus.in/")
    await safaripage.goto("https://www.flipkart.com")

    console.log("------Edge Browser-----")

    console.log("The title of the page is : " + await edgepage.title())

    const pageURL1 = await edgepage.url()

    console.log("The URL of the page is : " + pageURL1)

    console.log("------Edge Browser-----")

    console.log("------Safari Browser-----")

    console.log("The title of the page is : " + await safaripage.title())

    const pageURL2 = await safaripage.url()

    console.log("The URL of the page is : " + pageURL2)

   
})

// test('Load Flipkart', async({}) => {

//    const browser = await webkit.launch()

//     //to create a new browser context
//     const context = await browser.newContext()

//     //to create a new page
//     const page = await context.newPage()

//     await page.goto("https://www.flipkart.com/")

//     console.log("The title of the page is : " + await page.title())

//     const pageURL = await page.url()

//     console.log("The URL of the page is : " + pageURL)

// })