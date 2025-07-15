const newman = require('newman');

newman.run({
  collection: require('./Test/evershopAPI.postman_collection.json'),
  environment: require('./Test/url.postman_environment.json'),
  globals: require('./Test/workspace.postman_globals.json'),
  reporters: ['cli', 'allure'],
  reporter: {
    allure: {
      export: './allure-results'  // dossier où Allure stockera les résultats
    }
  }
}, (err) => {
  if (err) { throw err; }
  console.log('✅ Tests Postman exécutés avec succès !');
});
