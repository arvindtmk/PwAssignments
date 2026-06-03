import test from "@playwright/test";

test('Edit Lead', async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.fill("(//form[@id = 'login']//input)[1]", "democsr") //grand parent to child Xpath

    await page.fill("(//form[@id = 'login']//input)[2]", "crmsfa")

    await page.click("(//form[@id = 'login']//input)[3]", {force: true})

    await page.click("(//div[@for = 'crmsfa']/a)")  //Parent to child Xpath

    await page.locator("//a[text() = 'Leads']").click()

    await page.locator("//a[contains(text(), 'Create L')]").click()

    await page.fill("//input[@id = 'createLeadForm_companyName']", "LeoMakers")

    await page.fill("//input[@id= 'createLeadForm_firstName']", "Kim")

    await page.fill("(//input[@name= 'lastName'])[3]", "Tester01")

    await page.click("//input[@name= 'submitButton']")
    
    //Elder sibling to younger sibling Xpath transverse
    await page.click("((//a[contains(text(), 'Qualify L')])/following-sibling::a)[1]")

    await page.locator("//input[@id = 'updateLeadForm_companyName']").fill("GenNext")

    await page.locator("//input[@value= 'Update']").click()
        
})