const testFunction = (req, res) => {
  console.log("Its working")
  res.status(200).json({
    data: "alguma coisa"
  })
}

module.exports = {testFunction} 
