Feature('@ALL')

Scenario('See carousel load', (I) => {
  I.amOnPage('/')
  I.see('VIDEOS LOADING')
  I.waitForInvisible('VIDEOS LOADING', 3)
  I.waitForElement('#CAROL', 3)
  I.waitForElement('#SLIDE_ITEM', 3)
  I.seeElement('#VID_TITLE')
})

Scenario('History link routes to History page', (I) => {
  I.dontSeeInCurrentUrl('history')
  I.click('//h3[.="History"]')
  I.seeInCurrentUrl('/history')
})

Scenario('Home link route to Home page', (I) => {
  I.seeInCurrentUrl('/history')
  I.click('//h3[.="Home"]')
  I.dontSeeInCurrentUrl('history')
})

// fails: nightmare is evaluating the dom and finding the 'hidden' carousel elements
// I know the webdriverIO helper would evaluate this correctly
// Scenario('Clicking next on carousel scrolls items', (I) => {
//   I.wait(5)
//   I.see('10 Things I Hate About You')
//   I.dontSee('21 Jump Street')
//   I.click('▶')
//   I.dontSee('10 Things I Hate About You')
//   I.see('21 Jump Street')
// })

Scenario('Click on slide item routes to video player', (I) => {
  I.click('10 Things I Hate About You')
  I.seeInCurrentUrl('10-things-i-hate-about-you')
  I.see('NOW SHOWING:')
  I.see('10 Things I Hate About You')
  I.seeElement('#PLAYER')
  I.seeElement('#VID_DESCRIPTION')
})

Scenario('Refresh page reloads video data', (I) => {
  I.refresh()
  I.dontSee('10 Things I Hate About You')
  I.dontSeeElement('#VID_DESCRIPTION')
  I.dontSeeElement('#PLAYER')
  I.see('VIDEO LOADING...')
  I.waitForElement('#PLAYER', 5)
  I.see('10 Things I Hate About You')
  I.seeElement('#VID_DESCRIPTION')
})