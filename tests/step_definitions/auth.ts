import { Given, When, Then, BeforeAll } from '@cucumber/cucumber'
import { Browser, chromium, Page, expect } from '@playwright/test'

let _browser: Browser
let _page: Page
let _email: string
let _password: string

BeforeAll(async () => {
    _browser = await chromium.launch({ headless: true })
    _page = await _browser.newPage()
    _email = `${crypto.randomUUID()}@email.com`
    _password = '123'
})

Given("I am on the register page", async () => {
    await _page.goto("https://front.serverest.dev/cadastrarusuarios")
    expect(_page.url() === 'https://front.serverest.dev/cadastrarusuarios')
})
When("I type my email and password", async () => {
    await _page.locator("[data-testid='nome']").fill("fulano")
    await _page.locator("[data-testid='email']").fill(_email)
    await _page.locator("[data-testid='password']").fill(_password)
    await _page.locator("[data-testid='cadastrar']").click()
})
Then("I should be registered successfully", async () => {
    await _page.waitForURL('https://front.serverest.dev/home')
    expect(_page.url() === 'https://front.serverest.dev/home')
})

// --------------------

Given("I am on the login page", async () => {
    await _page.goto("https://front.serverest.dev/login")
    expect(_page.url() === 'https://front.serverest.dev/login')
})
When("I type my valid login credentials", async () => {
    await _page.locator("[data-testid='email']").fill(_email)
    await _page.locator("[data-testid='senha']").fill(_password)
    await _page.locator("[data-testid='entrar']").click()
})
Then("I should be logged in successfully", async () => {
    await _page.waitForURL('https://front.serverest.dev/home')
    expect(_page.url() === 'https://front.serverest.dev/home')
})

// --------------------

When("I type the invalid email {string}", async (email) => {
    await _page.locator("[data-testid='email']").fill(email)
    await _page.locator("[data-testid='senha']").fill(_password)
    await _page.locator("[data-testid='entrar']").click()
})
Then("I should not be logged in and get an informative error message", async () => {
    await _page.waitForURL('https://front.serverest.dev/login')
    expect(_page.url() === 'https://front.serverest.dev/login')
    expect(await _page.locator("//span[.='Email e/ou senha inválidos']")).toBeVisible()
})