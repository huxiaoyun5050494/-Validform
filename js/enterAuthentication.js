$(function () {
    $(".js-enterAuth-form").Validform({
        btnSubmit:".js-enterAuth-submit", //绑定触发校验按钮
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