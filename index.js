var Imagefile = document.getElementById("Imagefile")

    var canvas = document.getElementById("canvas")

    var button = document.getElementById("button")

    button.onclick = handleImagetoPdf

    function handleImagetoPdf() {
        html2canvas(canvas, {
            onrendered: function (canvas) {
                var imgdata = canvas.toDataURL('image/png')

                var doc = new jsPDF('p', 'mm');
                doc.addImage(imgdata, 'PNG', 10, 10);
                doc.save("kirmada_members.pdf");
            }
        })
    }

    var ctx = canvas.getContext('2d')

    Imagefile.addEventListener("change", handleImage, false)

    function handleImage(e) {
        console.log(e);

        var reader = new FileReader();

        reader.onload = function (event) {
            var image = new Image()

            image.onload = function () {
                canvas.width = image.width
                canvas.height = image.height
                ctx.drawImage(image, 0, 0)
            }
            image.src = event.target.result;
        }

        reader.readAsDataURL(e.target.files[0])
    }