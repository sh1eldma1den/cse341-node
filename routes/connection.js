
const {MongoClient} = require('mongodb');
const URI = "mongodb://megantmoore:apOOsa856100@cluster0.til6jg1.mongodb.net/?retryWrites=true&w=majority"

async function main() {

const client = new MongoClient(URI);

try {
  await client.connect();

  await listDatabases(client);

} catch (e) {

  console.error(e);

} finally {
  
  await client.close();

}
}
main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(' - ${db.name}'));

};
