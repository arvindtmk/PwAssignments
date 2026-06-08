import test, { expect } from "@playwright/test";

test ('Ticket Booking PVR', async({page}) => {

    page.on("dialog", CommonAlert => {

        const AlertType = CommonAlert.type()
        console.log("This alert type is: " + AlertType)

        const AlertMsg = CommonAlert.message()
        console.log("The message of alert is: " + AlertMsg)

        CommonAlert.accept()
    })

    await page.goto("https://www.pvrcinemas.com/")

    await page.locator("//h6[text() = 'Chennai']").click()

    await page.locator("//span[text() = 'Cinema']").click()

    await page.click("//span[text() = 'Select Cinema']")

    await page.locator("//span[text()='INOX Luxe Phoenix Market City, Velachery  (formerly Jazz Cinemas)Chennai']").click()

    await page.locator("//span[text()='Tomorrow']",).click()

    await page.locator("//span[text()='PARIMALA AND CO']").nth(1).click()

    await page.locator("//span[text()='12:15 PM']").click()

    await page.locator("//div[@class = 'quick-lefts ']/button").click()

    await page.locator("(//div[@class = 'accpet-btn-flow-seat']/button)[2]").click()

    await page.locator("//span[@id = 'EL.ELITE|I:18']").click()

    const seatInfo = await page.locator("//div[@class = 'seat-info']").innerText()

    console.log("Selected seat is: "+ seatInfo)

    const totalAmt = await page.locator("//div[@class = 'grand-prices']/h6").innerText()

    console.log("The grand total of ticket is: " + totalAmt)

    const pageTitle = await page.title()

    console.log("Title of the page is: "+ pageTitle)

    await expect(page).toHaveTitle("PVR Cinemas")

    await page.click("//button[text() = 'Proceed']")

    
})