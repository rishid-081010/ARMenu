const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Grant camera permissions to avoid prompt blocking
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('http://localhost:3000', ['camera']);

    page.on('request', req => console.log('REQ:', req.url()));
    page.on('response', response => {
        if (!response.ok()) {
            console.log('PAGE 404/ERR:', response.url(), response.status());
        }
    });

    await page.goto('http://localhost:3000/fallback-ar.html', {waitUntil: 'networkidle0'});
    
    await new Promise(r => setTimeout(r, 5000)); // wait for 5s to see what happens
    
    await browser.close();
})();
