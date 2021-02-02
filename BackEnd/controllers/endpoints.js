const Endpoint = require('../model/export/Endpoint')

const newEndpoint = async function(req, res){
    let endpoint = new Endpoint(req.body)
    await endpoint.createEndpoint()
    res.json(endpoint.getSendable());
}

const allEndpoints = async function(req, res){
    let endpoints = (await Endpoint.getAllEndpoints())
    let response = []
    for (let index = 0; index < endpoints.length; index++) {
        const element = endpoints[index];
        response.push(await element.getSendable())
    }
    res.json(response);
}

const updateEndpoint = async function(){
    let endpoint = await Endpoint.getFromId(req.body.id);
    endpoint.set(res.body)
    res.send(endpoint.getSendable())
}

const removeEndpoint = async function(req,res){
    let endpoint = await Endpoint.getFromId(req.body.id)
    await endpoint.removeEndpoint()
    res.send('Done')
}

module.exports = { allEndpoints, updateEndpoint, newEndpoint, removeEndpoint }