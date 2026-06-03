import {test, expect} from "@playwright/test";

test('Xpath Practice', async({page}) => {

    await page.goto("https://login.salesforce.com")

    await page.locator("//input[@id = 'username']").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("//input[contains(@class, 'mt8 pass')]").fill("TestLeaf@2025")

    await page.click("//input[@type = 'submit']")

    await page.click("//button[@title = 'App Launcher']")

    await page.click("//p[text()= 'Sales']")
    
    //Advanced Xpath parent to child
    await page.click("//a[@title = 'Leads']/span")

    await page.locator("(//a[@class= 'forceActionLink'])[1]").click()

    await page.locator("//button[@name= 'salutation']").click()

    await page.locator("//lightning-base-combobox-item[@data-value= 'Dr.']").click()

    await page.locator("//input[@name = 'firstName']").fill("Tester02")

    await page.locator("//input[@placeholder = 'Last Name']").fill("William")

    await page.locator("//input[@name= 'Company']").fill("Macron")

    await page.locator("//input[@name= 'Title']").fill("Xpath Practice")

    await page.click("(//button[text()= 'Save'])[2]")

    const popup = await page.locator(".forceVisualMessageQueue", {hasText: "created"})

    const popupText = await popup.innerText()

    if(popupText.includes("created")) {
        console.log("Lead created successfully");
    }    
    else {
        console.log("Lead Creation Failed");
    }

    // await expect(page).toHaveTitle("Tester02 Practice | Lead | Salesforce") //Assertion to verify the title of the page after lead creation

    // console.log(await page.title())

})