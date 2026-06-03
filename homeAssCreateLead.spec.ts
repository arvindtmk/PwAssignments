import test from "@playwright/test";

test('Create Lead', async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.fill("#username", "democsr")

    await page.fill("#password", "crmsfa")

    await page.click(".decorativeSubmit", {force: true})

    await page.click("text=CRM/SFA")

    await page.click("text=Leads")

    await page.locator("text = Create Lead").first().click()

    await page.fill("[id='createLeadForm_companyName']", "TestNestle")

    await page.fill("#createLeadForm_firstName", "Soumya")

    await page.locator("[name='lastName']").last().fill("Reena")

    await page.fill("input[id = 'createLeadForm_personalTitle']", "Dear")

    await page.locator("input[name = 'generalProfTitle']").fill("CSS Trainer")    

    await page.locator("input[id= 'createLeadForm_annualRevenue']").fill("1000000")

    await page.locator("#createLeadForm_departmentName").fill("Technology")

    await page.locator("input[id = 'createLeadForm_primaryPhoneNumber']").fill("9876543210")

    await page.locator("input[type= 'submit']").click()


})