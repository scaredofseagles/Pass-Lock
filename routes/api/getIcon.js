const puppeteer = require('puppeteer');

const getIcon = async (domain) => {

    try {
        const strippedDomain = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/igm.exec(domain); 

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://duckduckgo.com/?q=${strippedDomain[1]}+icon&atb=v239-7fk&t=h_&iax=images&ia=images`);
        await page.waitForSelector('.tile--img');
        
        const urls = await page.evaluate(() => document.querySelector('.tile--img img').src);

        await browser.close();

        return urls;
    } catch (error) {
        throw error;
    };
}

module.exports = getIcon;