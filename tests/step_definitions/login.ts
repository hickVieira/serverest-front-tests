import { Given, When, Then } from '@cucumber/cucumber'
import { Browser, chromium, Page } from '@playwright/test'
import assert from 'assert'

let browser: Browser
let page: Page

Given("I am on the login page", async () => {
    browser = await chromium.launch({ headless: false })
    page = await browser.newPage()
    await page.goto("https://front.serverest.dev/login")
    assert.equal(page.url(), 'https://front.serverest.dev/login')
});

When("I type my valid login credentials", async () => {
    page.locator("#email").fill("asdsadsad");
});

Then("I should be logged in successfully", async () => {

})