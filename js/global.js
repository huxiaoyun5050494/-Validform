$(function () {
    //全局左侧 菜单栏 复选框调用
    layui.use('form', function(){
        var form = layui.form;
        //监听改变 nav-select 是对应的 复选框
        form.on('select(nav-select)', function(data){
            console.log(data.elem); //得到select原始DOM对象
            console.log(data.value); //得到被选中的值
            console.log(data.othis); //得到美化后的DOM对象
        });
    });

    // 获取短信验证码 公共
    $(".js-getCode").on("click",function () {
        if ($(this).html() == "获取短信验证码") {
            var time = 60;
            var _this = $(this);
            _this.html(time + "s");
            var timer = setInterval(function () {
                time--;
                _this.html(time + "s");
                if(time <= 0){
                    _this.html("获取短信验证码");
                    clearInterval(timer);
                }
            },1000);

            // 调用验证码接口
            $.ajax({
                url:"/xxx",
                data:{
                    "telphone" : $("input[name='telphone']").val(),
                },
                success:function (data) {

                }
            });

        } else {
            return false;
        }
    });
});