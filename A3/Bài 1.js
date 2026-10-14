function checkEvenOdd() {
    // Lấy giá trị từ ô input và chuyển đổi thành số nguyên
    const inputVal = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");

    // Kiểm tra xem người dùng đã nhập giá trị chưa
    if (inputVal === "") {
        resultDiv.style.color = "red";
        resultDiv.innerText = "Vui lòng nhập một số nguyên!";
        return;
    }

    const num = parseInt(inputVal);

    // Kiểm tra tính chẵn lẻ
    if (num % 2 === 0) {
        resultDiv.style.color = "green";
        resultDiv.innerText = `Số ${num} là số chẵn.`;
    } else {
        resultDiv.style.color = "blue";
        resultDiv.innerText = `Số ${num} là số lẻ.`;
    }
}