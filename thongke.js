// Lấy tất cả các phần tử có lớp CSS là "col"
var colElements = document.getElementsByClassName("col");

// Lặp qua các phần tử và thêm sự kiện click
for (var i = 0; i < colElements.length; i++) {
    colElements[i].addEventListener("click", function () {
        // Tìm phần tử "row" liền kề với phần tử "col" được nhấp
        var rowElement = this.nextElementSibling;

        // Kiểm tra trạng thái hiển thị của phần tử "row"
        if (rowElement.style.display === "none") {
            // Nếu đang ẩn, hiển thị phần tử "row"
            rowElement.style.display = "block";
        } else {
            // Nếu đang hiển thị, ẩn đi
            rowElement.style.display = "none";
        }
    });
}


