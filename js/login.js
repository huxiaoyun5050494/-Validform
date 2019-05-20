$(function () {

    $.Tipmsg.r = null; //表单校验通过不提示

    $(".js-login-form").Validform({
        btnSubmit:".js-login-submit", //绑定触发校验按钮
        tiptype:function(msg){
            layer.msg(msg);
        },
        tipSweep:true,
        callback:function (data) {
            // form 表单形式提交，非ajax;
            return true;
        }
    });

});