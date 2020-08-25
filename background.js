function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

chrome.webNavigation.onCommitted.addListener(function(e) {
    doStuffWithDom();
  }, {url: [{hostSuffix: 'telegra.ph'},
            {hostSuffix: 'google.com.au'}]});