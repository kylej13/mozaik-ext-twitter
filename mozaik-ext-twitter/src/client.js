import Promise from 'bluebird';
import config from './config';

var Twitter = require('twitter');

var user_feed = new Twitter({
  consumer_key: 'Ff59XqlhcZ2s3PdLcBu9BD6de',
  consumer_secret: 'hvPo73QVyIvC2vkPKRwM9zZ7hmLIu6SSM1JyT4NzQEHx0NyJqj',
  access_token_key: '705430146-vqrUEuD633NELLWlXtqXXAnHIeaoYvdVnxqdLjg8',
  access_token_secret: '5XYT4232RS8MB2VAiqagquupF7kcGLb5kR90kbUJGIQiI'
});


/**
 *  * @param {Mozaik} mozaik
 *   */
const client = mozaik => {
    mozaik.loadApiConfig(config);

    const params = {screen_name: 'desmondmorris'};
    user_feed.get('statuses/user_timeline', params)
      .then(console.log)
      .catch(console.error)
    return {
	twitter() {
	    const def = Promise.defer();
	    mozaik.logger.info(chalk.yellow(`[travis] calling repository: ${owner}/${repository}`));
	    travis.repos(owner, repository).get((err, res) => {
                if (err) {
                    def.reject(err);
                }

                def.resolve(res.repo);
            });

            return def.promise;
	}
    }
}
//const client = new Twitter({
//  consumer_key: process.env.TWITTER_CONSUMER_KEY,
//  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//})

export default client;
