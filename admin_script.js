// Lắng nghe sự kiện click của nút Send
document.getElementById('sendButton').addEventListener('click', function () {
    // Lấy giá trị từ các trường input
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Tạo một đối tượng chứa thông tin khách hàng
    var customer = {
        fullName: fullName,
        email: email,
        phone: phone,
        message: message
    };

    // Gửi dữ liệu khách hàng lên máy chủ để lưu trữ và xử lý
    sendCustomerData(customer);
});

// Gửi dữ liệu khách hàng lên máy chủ
function sendCustomerData(customer) {
    // Tạo một yêu cầu HTTP POST đến máy chủ với thông tin khách hàng
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://example.com/save_customer_data', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Chuyển đổi thông tin khách hàng thành chuỗi JSON
    var customerData = JSON.stringify(customer);

    // Gửi dữ liệu
    xhr.send(customerData);

    // Xử lý kết quả trả về từ máy chủ (nếu cần thiết)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Hiển thị thông báo thành công
                showSuccessMessage();
            } else {
                // Hiển thị thông báo lỗi (nếu có)
                showErrorMessage();
            }
        }
    };
}

// Hiển thị thông báo thành công
function showSuccessMessage() {
    // Ẩn form và hiển thị kết quả thành công
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
}

// Hiển thị thông báo lỗi
function showErrorMessage() {
    // Hiển thị thông báo lỗi (nếu có)
    alert('An error occurred while sending the message. Please try again later.');
}
