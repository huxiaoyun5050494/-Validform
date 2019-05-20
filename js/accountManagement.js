$(function () {
    // 删除子账号
    $(".js-delete-child").on('click',function(){
        console.log(123)
        layui.use('layer', function(){
            var layer = layui.layer;
            layer.confirm('您是否要删除 <span style="color:#b9c7ff;">蘑菇菇1下的子账号</span> 吗？',
                {
                    area:'420px',
                    title:'刪除子账号',
                    btn: ['删除', '取消'] //可以无限个按钮
                },
                function(index, layero){
                    //按钮【按钮一】的回调
                    console.log(1)
                },
                function(index){
                    //按钮【按钮二】的回调
                    console.log(2)
                });

        });

    });
    // 关闭子账号
    $(".js-close-child").on('click',function(){
        console.log(123)
        layui.use('layer', function(){
            var layer = layui.layer;
            layer.confirm('您是否要关闭 <span style="color:#b9c7ff;">蘑菇菇1下的子账号</span> 吗？',
                {
                    area:'420px',
                    title:'关闭子账号',
                    btn: ['关闭', '取消'] //可以无限个按钮
                },
                function(index, layero){
                    //按钮【按钮一】的回调
                    console.log(1)
                },
                function(index){
                    //按钮【按钮二】的回调
                    console.log(2)
                });

        });

    });
    // 启动子账号
    $(".js-open-child").on('click',function(){
        console.log(123)
        layui.use('layer', function(){
            var layer = layui.layer;
            layer.confirm('您是否要启动 <span style="color:#b9c7ff;">蘑菇菇1下的子账号</span> 吗？',
                {
                    area:'420px',
                    title:'启动子账号',
                    btn: ['启动', '取消'] //可以无限个按钮
                },
                function(index, layero){
                    //按钮【按钮一】的回调
                    console.log(1)
                },
                function(index){
                    //按钮【按钮二】的回调
                    console.log(2)
                });

        });

    });

    //点击添加企业
    $(".js-change").on("click",function () {
        layer.open({
            type: 1,
            title:"添加子账号",
            content: $(".js-popup").html(),
            area:["830px","710px"]
        });

        // 添加 企业表单提交
        $.Tipmsg.r = null;
        $(".js-accountManagement-form").Validform({
            btnSubmit:".js-accountManagement-submit", //绑定触发校验按钮
            tiptype:function (msg) {
                layer.msg(msg);
            },
            tipSweep:true,
            callback:function (data) {
                // form 表单形式提交，非ajax;
                return true;
            }
        });
        // 弹出框 取消
        $(".js-accountManagement-out").on("click",function(){
            $(".layui-layer-close").click();
        })
    });
    layui.use('layer', function(){
        var layer = layui.layer;

        layer.msg('同上', {
            // icon: 1,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
        }, function(){
            //do something
        });
    });



});