module.exports = {
    HTML:function(title, list, body, control){
        return `
    <!doctype html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <a href="/"><h1>WEB</h1></a>
            ${list}
            ${control}      
            ${body}
        </body>
    </html>`;
    }, list:function(filelist){
        var list = '<ul>';
        var i=0;
        while(i < filelist.length){
            list = list + `<li><a
            href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i=i+1;
        }
        list = list + '</ul>';
        return list;
    }
}

