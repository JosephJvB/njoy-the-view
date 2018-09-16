Feature('@ALL')

/* TODO:
  - test that finish vid adds to history
  - test that you can save a rating on a video @ history page
*/

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
  I.refreshPage()
  I.dontSee('10 Things I Hate About You')
  I.dontSeeElement('#VID_DESCRIPTION')
  I.dontSeeElement('#PLAYER')
  I.see('VIDEO LOADING...')
  I.waitForElement('#PLAYER', 5)
  I.see('10 Things I Hate About You')
  I.seeElement('#VID_DESCRIPTION')
})

Scenario('Click on player starts video', (I) => {
  I.click('//span[.="Play Video"]')
  I.waitForElement('.vjs-control-bar', 3)
  I.seeVideoPlaying()
})

// works as a document.querySelector('button[title="Fullscreen"]').click() from devtools console
// but nightmare isnt playing along!
// Scenario('Can view video in full-screen', (I) => {
//   I.click('button[title="Fullscreen"]')
// })

// cant hack finish the video like this..
// Scenario('I finish video', (I) => {
//   I.executeScript(function () {
//     document.querySelector('vjs-play-progress').style = "{width: 99%}"
//   })
//   I.wait(10)
// })
