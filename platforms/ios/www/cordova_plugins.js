cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-customurlscheme.LaunchMyApp",
        "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
        "pluginId": "cordova-plugin-customurlscheme",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-customurlscheme": "4.2.0",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-dialogs": "1.2.1"
};
// BOTTOM OF METADATA
});