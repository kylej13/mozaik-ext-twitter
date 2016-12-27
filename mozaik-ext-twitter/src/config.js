import convict from 'convict';


const config = convict({
    feed: {
	user: {
	    doc:     'The users feed to display',
	    default: 'ATT',
	    format:  String,
	    env:     'TWITTER_USER'
	},
	consumer_key: {
	    doc:     'The twitter consumer key',
            default: 'Ff59XqlhcZ2s3PdLcBu9BD6de',
            format:  String,
            env:     'TWITTER_CONSUMER_KEY'
	},
	consumer_secret: {
	    doc:     'The twitter consumer secret',
            default: 'hvPo73QVyIvC2vkPKRwM9zZ7hmLIu6SSM1JyT4NzQEHx0NyJqj',
            format:  String,
            env:     'TWITTER_CONSUMER_SECRET'
	},
	access_token_key: {
	    doc:     'The twitter token key',
            default: '705430146-vqrUEuD633NELLWlXtqXXAnHIeaoYvdVnxqdLjg8',
            format:  String,
            env:     'TWITTER_TOKEN_KEY'
	},
	access_token_secret: {
	    doc:     'The twitter token secret',
            default: '5XYT4232RS8MB2VAiqagquupF7kcGLb5kR90kbUJGIQiI',
            format:  String,
            env:     'TWITTER_TOKEN_SECRET'
	}
    }
});


export default config;
