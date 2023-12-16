// Dữ liệu giả định
let danhSachSanPham = [];
let danhSachKhuyenMai = [];
let danhSachDonHang = [];

// Hàm hiển thị trang
function hienThiTrang(trang) {
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('productsPage').style.display = 'none';
    document.getElementById('promotionsPage').style.display = 'none';
    document.getElementById('ordersPage').style.display = 'none';

    document.getElementById(`${trang}Page`).style.display = 'block';

    // Nạp nội dung của trang từ file HTML riêng
    let contentDiv = document.getElementById('content');
    fetch(`${trang}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
            if (trang === 'products') {
                hienThiDanhSachSanPham();
            } else if (trang === 'promotions') {
                hienThiDanhSachKhuyenMai();
            } else if (trang === 'orders') {
                hienThiDanhSachDonHang();
            }
        });
}

// Hàm hiển thị danh sách sản phẩm
function hienThiDanhSachSanPham() {
    let danhSachSanPham = [];

// Hàm thêm sản phẩm
function themSanPham() {
    // Lấy giá trị từ các input
    let tenSanPham = document.getElementById('productName').value;
    let maSanPham = document.getElementById('productCode').value;
    let soLuong = document.getElementById('productQuantity').value;
    let gia = document.getElementById('productPrice').value;
    let hinhAnh = document.getElementById('productImage').value; // Chưa xử lý hình ảnh trong ví dụ này

    // Thêm sản phẩm vào danh sách
    danhSachSanPham.push({
        tenSanPham: tenSanPham,
        maSanPham: maSanPham,
        soLuong: soLuong,
        gia: gia,
        hinhAnh: hinhAnh
    });

    // Hiển thị lại danh sách sản phẩm
    hienThiDanhSachSanPham();

    // Xóa dữ liệu trong form
    document.getElementById('productName').value = '';
    document.getElementById('productCode').value = '';
    document.getElementById('productQuantity').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = '';
}

// Hàm hiển thị danh sách sản phẩm
function hienThiDanhSachSanPham() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';

    // Hiển thị danh sách sản phẩm
    danhSachSanPham.forEach(function (sanPham) {
        let listItem = document.createElement('li');
        listItem.textContent = `Tên: ${sanPham.tenSanPham}, Mã: ${sanPham.maSanPham}, Số lượng: ${sanPham.soLuong}, Giá: ${sanPham.gia}, Hình ảnh: ${sanPham.hinhAnh}`;
        productList.appendChild(listItem);
    });
}
    // Code hiển thị danh sách sản phẩm sẽ được thêm vào ở đây
}

// Hàm hiển thị danh sách khuyến mãi
function hienThiDanhSachKhuyenMai() {
    // Dữ liệu giả định (có thể thay thế bằng cơ sở dữ liệu thực tế)
let danhSachKhuyenMai = [];

// Hàm thêm khuyến mãi
function themKhuyenMai() {
    // Lấy giá trị từ các input
    let tenKhuyenMai = document.getElementById('promotionName').value;
    let maKhuyenMai = document.getElementById('promotionCode').value;
    let giaTriKhuyenMai = document.getElementById('promotionPercentage').value;
    let ngayBatDau = document.getElementById('promotionStartDate').value;
    let ngayKetThuc = document.getElementById('promotionEndDate').value;

    // Thêm khuyến mãi vào danh sách
    danhSachKhuyenMai.push({
        tenKhuyenMai: tenKhuyenMai,
        maKhuyenMai: maKhuyenMai,
        giaTriKhuyenMai: giaTriKhuyenMai,
        ngayBatDau: ngayBatDau,
        ngayKetThuc: ngayKetThuc
    });

    // Hiển thị lại danh sách khuyến mãi
    hienThiDanhSachKhuyenMai();

    // Xóa dữ liệu trong form
    document.getElementById('promotionName').value = '';
    document.getElementById('promotionCode').value = '';
    document.getElementById('promotionPercentage').value = '';
    document.getElementById('promotionStartDate').value = '';
    document.getElementById('promotionEndDate').value = '';
}

// Hàm hiển thị danh sách khuyến mãi
function hienThiDanhSachKhuyenMai() {
    let promotionList = document.getElementById('promotionList');
    promotionList.innerHTML = '';

    // Hiển thị danh sách khuyến mãi
    danhSachKhuyenMai.forEach(function (khuyenMai) {
        let listItem = document.createElement('li');
        listItem.textContent = `Tên: ${khuyenMai.tenKhuyenMai}, Mã: ${khuyenMai.maKhuyenMai}, Giá trị: ${khuyenMai.giaTriKhuyenMai}%, Ngày bắt đầu: ${khuyenMai.ngayBatDau}, Ngày kết thúc: ${khuyenMai.ngayKetThuc}`;
        promotionList.appendChild(listItem);
    });
}
    // Code hiển thị danh sách khuyến mãi sẽ được thêm vào ở đây
}

// Hàm hiển thị danh sách đơn hàng
function hienThiDanhSachDonHang() {
    let danhSachDonHang = [];

// Hàm hiển thị danh sách đơn hàng
function hienThiDanhSachDonHang() {
    let orderTable = document.getElementById('orderTable').getElementsByTagName('tbody')[0];
    orderTable.innerHTML = '';

    // Hiển thị danh sách đơn hàng
    danhSachDonHang.forEach(function (donHang) {
        let row = orderTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.textContent = donHang.maHoaDon;
        cell2.textContent = donHang.tenKhachHang;
        cell3.textContent = donHang.sanPhamMua.join(', ');
        cell4.textContent = donHang.tongGiaTri;
        cell5.textContent = donHang.hinhThucThanhToan;
        cell6.textContent = donHang.tinhTrangDonHang;
    });
}

    // Code hiển thị danh sách đơn hàng sẽ được thêm vào ở đây
}
