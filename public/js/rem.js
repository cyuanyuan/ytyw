(function () {

    // // 1920宽度下字体大小.
    // const size1920 = 16

    // function setFS() {
    //     let w = window.innerWidth
    //     let s = Math.round(size1920 * w / 1920)
    //     let elm = document.getElementsByTagName('html')[0]
    //     elm.setAttribute("style", "font-size:" + s + "px;");
    // }

    // setFS()
    // window.addEventListener('resize', () => {
    //     setFS()
    // })

    function zoom_body() {
        let w = window.innerWidth
        let scale = w / 1920

        let body = document.getElementsByTagName('body')[0]
        body.setAttribute('style', "transform: scale(" + scale + "); transform-origin: top left;")
    }

    zoom_body();

    window.onresize = function () {
        zoom_body();
    }
})()