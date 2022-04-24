$(function(){
    function padZero(n){
        if (n<10)
        return '0'+n;
        else
        return n;
    }
    template.defaults.imports.dateFormat = function(e){
                 let dt = new Date(e);
                 let y = dt.getFullYear();
                 let m = padZero(dt.getMonth());
                 let d = dt.getDate();
                 return y+'年'+m+'月'+d+'日';
            }
    function getNewsList(){
       $.get('http://www.liulongbin.top:3006/api/news',
        function (res){
            if (res.status !== 200){
                alert("receive fail");
            }
            console.log(res);
            let a = template('tpl_news',res);
            $('#container').html(a);
            
        }
       )
    };
    getNewsList();
})