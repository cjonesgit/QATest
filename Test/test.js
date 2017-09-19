var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome',
		project: "QA Engineer Interview Excersize"
    }
};

// Credentials
var email = 'qatest@shipt.com'
var pw = 'Sh1pt123!'

// Credential Fields
var inputEmail = 'input[type="email"]'
var inputPw = 'input[type="password"]'

// Keys
var unPw = email + '\uE004' + pw + '\uE007'
var srchProd = 'English Breakfast Tea\uE007'

// Elements
var login = 'button#start_shopping_login_button'
var inputSrch = 'input[type="search"]'
var srchRes = 'span[class="count ng-binding"]'
var loginURL = 'a[href="https://shop.shipt.com/#/app/home"]'
var catList = 'button[data-full-label="Shop by Category"]'
var catArr = 'ion-popover-view>ion-content>div>div:nth-child(2)>ion-list>div>ion-item:nth-child(1)'

//.modal-wrapper-1.can-close .modal-wrapper-2.shadow-modal .modal-wrapper-5:before

webdriverio
    .remote(options)
    .init()
// Navigate to Webpage
    .url('http://www.shipt.com')
// Click Login Button
	.click(loginURL)
// Type email, tab to password, enter password, and press enter
	.keys(unPw)
	.pause(2000)
// Type search in search criteria and press enter
	.click(inputSrch)
	.keys(srchProd)
// Pause for potential results
	.pause(2000)
// This test should return English Breafast Tea
	.getText(srchRes).then(function(text) {
		if (text === 0) {
			 console.log('No Results Found');
		} else {
		 console.log('Results Count: ' + text);
		}
	})
// Open Category List and wait for it to populate
	.click(catList)
	.waitForExist(catArr, 3000)
// Select Beverages
	.click(catArr)
	.pause(3000)
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();