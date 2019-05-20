$(function () {
    $.Tipmsg.r = null; //表单校验通过不提示

    //先校验第一块内容
    $(".js-forget-module1").Validform({
        btnSubmit:".js-forget-one", //绑定触发校验按钮
        tiptype:function(msg){
            layer.msg(msg);
        },
        tipSweep:true,
        callback:function (data) {
            // 第二块表单 校验通过， 隐藏
            $(".js-forget-module1").hide();
            // 第3块表单 显示
            $(".js-forget-module2").show();
        }
    });

    //点击找回密码
    $(".js-forget-module2").Validform({
        btnSubmit:".js-forget-two", //绑定触发校验按钮
        tiptype:function(msg){
            layer.msg(msg);
        },
        tipSweep:true,
        callback:function (data) {
            $(".js-forget-form").submit();
        }
    });
});