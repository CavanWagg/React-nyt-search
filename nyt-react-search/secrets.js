const secrets = {
  dbUri: 'mongodb://heroku_601dp645:$Vikings28f@ds233551.mlab.com:33551/heroku_601dp645'
};

export const getSecret = key => secrets[key];