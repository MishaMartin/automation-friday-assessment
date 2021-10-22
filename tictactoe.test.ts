import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await driver.sleep(1000);

    await button.click();

    await driver.sleep(1000)
    
});

test("Should return an 'X' in the top left square", async () => {
    let leftCell = await (await driver).findElement(By.id('cell-0'));
    await leftCell.click()

    expect(await leftCell.getText()).toContain("X")

    await driver.sleep(1000)
})

test("Should return an 'X' in the middle square", async () => {
    let middleCell = await (await driver).findElement(By.id('cell-4'));
    await middleCell.click()

    expect(await middleCell.getText()).toContain("X")

    await driver.sleep(1000)
})

test("Should return an 'X' in the bottom right square", async () => {
    let bottomCell = await (await driver).findElement(By.id('cell-8'));
    await bottomCell.click()

    expect(await bottomCell.getText()).toContain("X")

    await driver.sleep(1000)
})