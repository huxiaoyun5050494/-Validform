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


    // 修改
    $(".js-open-invoice").on('click',function(){

        console.log(111)
        layer.open({
            type: 1,
            title:"修改操作员信息",
            content: $(".js-popup"),
            area:["830px","470px"]
        });

        // 添加 企业表单提交
        $.Tipmsg.r = null;
        $(".js-admin-form").Validform({
            btnSubmit:".js-admin-submit", //绑定触发校验按钮
            tiptype:function (msg) {
                layer.msg(msg);
            },
            tipSweep:true,
            callback:function (data) {
                // form 表单形式提交，非ajax;
                return true;
            }
        });

        layui.use('laydate', function(){
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#test1' //指定元素
            });
        });



    });







})
