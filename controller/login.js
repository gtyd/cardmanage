/**
 * Created by yaoxy on 2015/10/30.
 */
function init(req,res,obj){
    var AV= obj.AV;
    var username = req.body.username;
    var password = req.body.password;
    var originalUrl = req.body.originalUrl;
    AV.User.logIn(username, password, {
        success: function(user) {
            if(originalUrl){
                res.redirect(originalUrl);
            }else{
                res.redirect('/');
            }
        },
        error: function(user, err) {
            obj.render(req,res,{template:"login",data:{title:"登录失败",err:err}});
        }
    })
}
exports.init=init;
