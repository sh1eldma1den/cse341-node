app.get('/contacts', async function(req, res){
    const uri = process.env.MONGO_URI.replace('dbname', 'cse341');

    const client = new MondoClient(uri);

    const dbo = client.db('cse341');

    const person = await dbo.collection('cse341').findOne();

    res.send(person);
})