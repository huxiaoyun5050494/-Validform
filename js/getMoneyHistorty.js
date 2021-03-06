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

    // 日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#js-time', //指定元素
            range: true,
            change: function (value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            }
        });

        //执行一个laydate实例
        laydate.render({
            elem: '#js-end-time' //指定元素
        });
    });
})