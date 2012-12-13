/**
 * GET ListVerifiedEmailAddresses
 */
module.exports.encodeRequest = function(request) {
  request.query['Action'] = 'ListVerifiedEmailAddresses';
}

/**
 * ListVerifiedEmailAddressesResponse
 */
module.exports.decodeResponse = function(response) {
  var xmlItems = response.xml.find('/ListVerifiedEmailAddressesResponse/ListVerifiedEmailAddressesResult/VerifiedEmailAddresses/member');

  response.data.verifiedEmailAddresses = [];

  xmlItems.forEach(function (xmlItem) {
    response.data.verifiedEmailAddresses.push(response.xmlToJson(xmlItem));
  });
}
