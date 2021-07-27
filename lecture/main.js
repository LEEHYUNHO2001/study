function templateHTML(title, root){
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="css/styles.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>


    <body class="main">
        <header class="main-header">
            <div class="main-header__icon">
                <span><i class="fas fa-calculator"></i></span>
            </div>
            <h1 class="main-header__title">${title}</h1>
            <div class="main-header__icon">
                <span><i class="fas fa-calculator"></i></span>
            </div>
        </header>
        
        <div class=${root}></div>
        <script src="./dist/app.js"></script>

        <div class="back">
            <a href="/" class="back-name">뒤로가기</a>
        </div>

        <script
        src="https://kit.fontawesome.com/6478f529f2.js"
        crossorigin="anonymous"
        ></script>
    </body>
    </html>
    `
}

module.exports = templateHTML;