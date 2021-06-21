var Imagefile = document.getElementById("Imagefile")

var canvas = document.getElementById("canvas")

var button = document.getElementById("button")

Imagefile.addEventListener("change",handleImage, false)

function handleImage(e){
    console.log(e);

    var reader = new FileReader()

    reader.onload = function(event){
        var image= new Image()


        image.src = event.target.result
    }

    reader.readAsDataURL(e.target.files[0])
}