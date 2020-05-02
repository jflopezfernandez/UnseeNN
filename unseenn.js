
/**
 * This script configuration object currently contains a single entry, which is
 * responsible for determining whether to log output to the console.
 */
const configuration = {
    debug: false
};

/**
 * This function object simply takes a single message string parameter and
 * writes it to the developer console.
 * 
 * @param {string} message The message to be logged to the console.
 */
const Log = (message) => {
    const { debug } = configuration;

    if (debug) {
        console.log(`[Debug] UnseeNN: ${message}`);
    }
};

/**
 * This object is responsible for watching the DOM for changes. Currently the
 * response is to simply set any modified node to 'null', thereby solving the
 * problem without requiring any advanced processing of any kind. I doubt this 
 * model will remain feasible for very long if and when CNN finds out about
 * this extension, however.
 * 
 * Currently, CNN loads their articles' text right away and without making any
 * changes to the respective parent containers. They could simply start
 * changing elements containing article text and this methodology would be
 * rendered useless. Until such time, however, simplicity reigns.
 */
const pageMutationObserver = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        Log('The DOM has been modified.');
        mutation.target = null;
    }
});

/**
 * In order to actually handle page mutations, we have to call the observe()
 * method on our mutation observer object. Since CNN modifies the DOM
 * constantly to display ads, there's never a reason to call disconnect().
 */
pageMutationObserver.observe(window.document, {
    attributes: true,
    childList: true,
    subtree: true
});
