function browserHistory(browser, actions) {

    let openTabs = browser['Open Tabs'];
    let recentlyClosed = browser['Recently Closed'];
    let browserLogs = browser['Browser Logs'];

    for (let action of actions) {

        if (action === 'Clear History and Cache') {

            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
            continue;

        }

        let [command, site] = action.split(' ');

        if (command === 'Open') {

            openTabs.push(site);
            browserLogs.push(action);

        } else if (command === 'Close') {

            let index = openTabs.indexOf(site);

            if (index !== -1) {

                openTabs.splice(index, 1);
                recentlyClosed.push(site);
                browserLogs.push(action);

            }
        }
    }

    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);

}
browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
