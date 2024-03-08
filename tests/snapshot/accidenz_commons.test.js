import { goTo, pause } from './helpers'

describe('CC Accidenz Commons', () => {
  it('Uppercase letters', async () => {
    await goTo(page, 'cc-accidenz-commons--uppercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Lowercase letters', async () => {
    await goTo(page, 'cc-accidenz-commons--lowercase-letters')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })

  it('Numbers', async () => {
    await goTo(page, 'cc-accidenz-commons--numbers')
    await pause(1000) // Fonts take some time to load
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
