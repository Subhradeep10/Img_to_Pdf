var Imagefile = document.getElementById("Imagefile")

var canvas = document.getElementById("canvas")

var button = document.getElementById("button")

var ctx = canvas.getcontext('2d')

Imagefile.addEventListener("change",handleImage, false)

function handleImage(e){
    console.log(e);

    var reader = new FileReader()

    reader.onload = function(event){
        var image= new Image()

        image.onload = function(){
            canvas.width = image.width
            canvas.height = image.height
            ctx.drawImage(image,0,0)
        }
        image.src = event.target.result
    }

    reader.readAsDataURL(e.target.files[0])
}