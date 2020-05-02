
const configuration = {
    debug: false
};

const Log = (message) => {
    const { debug } = configuration;

    if (debug) {
        console.log(`[Debug] UnseeNN: ${message}`);
    }
};

const pageMutationObserver = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        Log('The DOM has been modified.');
        mutation.target = null;
    }
});

pageMutationObserver.observe(window.document, {
    attributes: true,
    childList: true,
    subtree: true
});
