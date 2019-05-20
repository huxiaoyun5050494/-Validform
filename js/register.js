$(function () {
    $.Tipmsg.r = null; //表单校验通过不提示

    //点击第一个下一步  先校验第一块内容
    $(".js-register-module1").Validform({
        btnSubmit:".js-register-one", //绑定触发校验按钮
        tiptype:function(msg){
            layer.msg(msg);
        },
        tipSweep:true,
        callback:function (data) {
            $(".js-enterprise-form").submit();
           console.log(data)
        }
    });


});