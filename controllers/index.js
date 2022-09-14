displayName = (req, res) => {
    const data =
      'Quency Raney';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName,
  };