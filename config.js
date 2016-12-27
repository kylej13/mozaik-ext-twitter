/**
 * Mozaïk EXT_NAME widgets sample config.
 */
require('dotenv').load();


const config = {
    env:  'prod',

    host:             '0.0.0.0',
    port:             process.env.PORT || 5000,
    useWssConnection: process.env.USE_SSL === 'true',

    theme: 'night-blue',

    api: {},

    rotationDuration: 10000,

    dashboards: [
        {
            columns: 3,
            rows:    2,
            widgets: [
                // Add widgets here
                {
                    type: 'twitter.twitter',
                    columns: 2, rows: 2,
                    x:0, y:1
                }
            ]
        }
    ]
}


module.exports = config
