$(function () {
    $(".js-addEnter-form").Validform({
        btnSubmit:".js-addEnter-submit", //绑定触发校验按钮
        tiptype:function (msg) {
            layer.msg(msg);
        },
        tipSweep:true,
        callback:function (data) {
            // form 表单形式提交，非ajax;
            return true;
        }
    });
});