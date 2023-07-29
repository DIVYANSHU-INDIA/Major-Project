module.exports.home = function(req,res){
    return res.end('<h1>Express is up for codeal</h1>');
}

module.exports.profile= function(req,res){
    return res.end('<h1>This is the profile section</h1>');

}