// Custom Server To Generate Ticket Acess Ubisoft Services 

const express = require('express')
const app = express()
const fs = require('fs')
const ubiprod = require('./prod.json')
const fetch = require('node-fetch')

let v3sessions = {
  "ubi": {
    "sessions": "/v3/profiles/sessions"
  }
}


// Get Ubisoft Ticket

// Tickets Platform

var platformtype = {
  "All-Xbox": "xbl",
  "All-Playstation": "psn",
  "PC": "Uplay",
  "Wiiu": "WiiU",
  "NintendoSwitch": "Switch"
  
}
app.post(v3sessions.ubi.sessions,(req,res) => {

  var UbiServicesReq = fetch(ubiprod.prod.urls.UbiPROD + v3sessions.ubi.sessions,{
    headers: {
      "authorization": req.header('authorization'),
    "Ubi-AppId": req.header('Ubi-AppId'),
    "ubi-requestedplatformtype": req.header('ubi-requestedplatformtype'),
    "Content-Type": req.header('Content-Type')
    },
    "method": "POST"
  })
  UbiServicesReq.then(response => response.json()).then(ticket => {
    return res.send(ticket)
    return res.status()})                   
})

// Listen

app.listen(process.env.PORT ,console.log('Server Running'))
