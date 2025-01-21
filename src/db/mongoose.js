const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jerimo0905:qLEvPtJmk6gzwbJm@cluster0.wzzcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })
