var mongoDevUri = process.env.MONGOHQ_URL || "localhost:27017/nodetest1";
var mongoStageUri = process.env.MONGOHQ_URL || "localhost:27017/nodetest1";
var mongoProdUri = process.env.MONGOHQ_URL || "localhost:27017/nodetest1";

var config = {
  local: {
    mode: 'local',
    port: 3000,
    mongoUrl: mongoDevUri
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongoUrl: mongoStageUri
  },
  prod: {
    mode: 'prod',
    port: process.env.PORT || 5000,
    mongoUrl: mongoProdUri
  }
};

module.exports = function (mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
};