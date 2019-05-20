$(function () {
    //交易记录 分页调用
    layui.use('laypage', function(){
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
            elem: 'capital-page', //注意，这里的 test1 是 ID，不用加 # 号
            count: 50, //数据总数，从服务端得到
            layout: ['count', 'prev', 'page', 'next', 'refresh', 'skip'],
            jump: function(obj, first){
                //首次不执行
                if(!first){
                    //obj包含了当前分页的所有参数，比如：
                    console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                    console.log(obj.limit); //得到每页显示的条数
                }
            }
        });
    });

    // 申请开票
    $(".js-open-invoice").on('click',function(){
        console.log(123)
        layui.use('layer', function(){
            var layer = layui.layer;
            layer.confirm('<span style="color:#666;">申请已发送请等待审核</span>',
                {
                    area: '420px',
                    title:'申请开票',
                    btn: ['确认', '取消'] //可以无限个按钮
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
    // 快递查询
    $(".js-search-order").on('click',function(){
        console.log(123)
        layui.use('layer', function(){
            var layer = layui.layer;
            layer.confirm('<span style="color:#666;">顺丰快递 &nbsp;&nbsp;&nbsp;&nbsp;单号：<span style="color:#5e84ff;">999991111</span></span>',
                {
                    area: '420px',
                    title:'快递查询',
                    btn: ['确认', '取消'] //可以无限个按钮
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



})