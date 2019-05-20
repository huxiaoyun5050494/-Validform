$(function () {
    //营业执照预览
    $(".js-file").on("change",function () {
        function readFile() {
            var file = $(".js-file")[0].files[0];
            //判断是否是图片类型
            if (!/image\/\w+/.test(file.type)) {
                layer.msg("只能上传图片!");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                $(".js-img").attr("src",this.result)
            }
        }
        readFile();
    });

    $(".js-makeMoneyAuth-form").Validform({
        btnSubmit:".js-makeMoneyAuth-submit", //绑定触发校验按钮
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