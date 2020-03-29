const jsonp = ((global, body) => {
    'use strict';

    // Uses native Promise. Older browsers + IE11 and Safari 7 (!) need polyfill.
    if (!global.Promise) {
        throw 'Promise not available. Use a polyfill! http://promisesaplus.com/implementations';
    }

    const createScript = (url, callbackName) => {
        var script = document.createElement('script');
        script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;

        return script;
    }

    return (url) => {
        return new Promise((resolve, reject) => {
            var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random()),
                script = createScript(url, callbackName);

            // If we fail to get the script, reject the promise.
            script.onerror = reject;

            body.appendChild(script);
            // If the url contains a 'something_callback=?' then
            // replace the '?' with our random generated callbackName. 
            if (/callback=?/.test(url)) {
                url = url.replace('=?', '=' + callbackName);
            }

            global[callbackName] = function (data) {
                // Script inserted, resolve promise.
                resolve(data);

                // Clean up.
                global[callbackName] = null;
                delete global[callbackName];
                body.removeChild(script);
            };
        });
    };

})(this, document.body);