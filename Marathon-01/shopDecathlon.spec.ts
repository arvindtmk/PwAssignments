import test, { expect } from "@playwright/test"

test('Shop Decathlon', async({page}) => {
    
    await page.goto("https://www.decathlon.in/")

    let searchoption = await page.locator("//input[@data-test-id='search-input-desktop:container']")

    await expect(searchoption).toBeEnabled()

    await searchoption.click()

    await searchoption.fill("shoes")

    await searchoption.press('Enter') 

    /* let searchOption01 = await page.getByPlaceholder("Search")

    await expect(searchOption01).toBeEnabled()

    await searchOption01.click()

    await searchOption01.fill("shoes")

    await searchOption01.press('Enter') */

    //await page.waitForTimeout(2000)

    let pgTitle = await page.title() 

    console.log(pgTitle)

    await expect(pgTitle).toBe("Search | shoes")

    await page.locator("//span[@data-test-id='title:Category']").click()

    await page.locator("//label[@data-test-id='filter-item-nature_id_en-Golf Shoes']/label").click()

    await page.locator("//span[text()='Gender']").click()

    await page.locator("//span[text()='Men']").last().click()

    await page.locator("//span[text()='Size']").click()

    await page.locator("//label[@data-test-id='filter-item-indian_size-10.5']/label").click()

    await page.locator("//span[text()='Most relevant']").click()

    await page.locator("//span[text()='Price (high → low) ']").click()

    await page.locator("//a[@data-test-id='product-card-link']").nth(0).click()

    await page.locator("//span[text()='UK 12 - EU 47']").click()

    await page.locator("//button[@data-test-id='pdp:add-to-cart-button']/span").click()

    await page.waitForTimeout(2000)

    await page.locator("//span[text()='Cart']").click()

    const CartTotal = await page.locator("//div[@data-test-id='order-summary-item-container']/div").last().innerText()

    console.log("The total cart cost is: "+CartTotal)

})