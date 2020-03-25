var ReverseProxy = require('../model/ReverseProxy')

var reverseProxyGet = async function (req, res) {
    let apiAdress = req.originalUrl
    let ortahncCalledApi = apiAdress.replace('/api', '');
    console.log('reverseGET'+ ortahncCalledApi)
    ReverseProxy.streamToRes(ortahncCalledApi, 'GET', undefined ,res)
}

var reverseProxyPost = function (req, res) {
    let apiAdress = req.originalUrl
    let ortahncCalledApi = apiAdress.replace('/api', '');
    console.log(ortahncCalledApi)
    ReverseProxy.streamToRes(ortahncCalledApi, 'POST', req.body, res)

}

var reverseProxyPostUploadDicom = function (req, res) {
    let apiAdress = req.originalUrl
    let ortahncCalledApi = apiAdress.replace('/api', '');
    ReverseProxy.streamToResUploadDicom(ortahncCalledApi, 'POST', req.body, res)
}

var reverseProxyDelete = function (req, res) {
    let apiAdress = req.originalUrl
    let ortahncCalledApi = apiAdress.replace('/api', '');
    console.log('reverseGET'+ ortahncCalledApi)
    ReverseProxy.streamToRes(ortahncCalledApi, 'DELETE', undefined ,res)

}

var reverseProxyPut = function(req, res){
    let apiAdress = req.originalUrl
    let ortahncCalledApi = apiAdress.replace('/api', '');
    console.log('reverseGET'+ ortahncCalledApi)
    ReverseProxy.streamToRes(ortahncCalledApi, 'PUT', req.body ,res)

}

module.exports = { reverseProxyGet, reverseProxyPost, reverseProxyPostUploadDicom, reverseProxyPut, reverseProxyDelete }