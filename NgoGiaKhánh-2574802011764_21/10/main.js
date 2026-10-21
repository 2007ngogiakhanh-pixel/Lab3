const danhSachTaiKhoan = [
  { taiKhoan: "khach1", matKhau: "123456" }
];

let taiKhoanDangNhap = null;
const oTaiKhoan = document.getElementById("oTaiKhoan");
const oMatKhau = document.getElementById("oMatKhau");
const oThongBaoLoi = document.getElementById("thongBaoLoi");
const oManHinhDangNhap = document.getElementById("manHinhDangNhap");
const oManHinhCuaHang = document.getElementById("manHinhCuaHang");
const oTenDangNhap = document.getElementById("tenDangNhap");

function timTaiKhoan(taiKhoan) {
  for (let i = 0; i < danhSachTaiKhoan.length; i += 1) {
    if (danhSachTaiKhoan[i].taiKhoan === taiKhoan) {
      return danhSachTaiKhoan[i];
    }
  }

  return null;
}

function hienThiThongBao(noiDung, loai) {
  oThongBaoLoi.className = `thong-bao ${loai}`;
  oThongBaoLoi.textContent = noiDung;
}

function dangKy() {
  const taiKhoan = oTaiKhoan.value.trim();
  const matKhau = oMatKhau.value;

  if (!taiKhoan || !matKhau) {
    hienThiThongBao("Vui lòng nhập đầy đủ tài khoản và mật khẩu.", "loi");
    return;
  }

  if (timTaiKhoan(taiKhoan) !== null) {
    hienThiThongBao(
      "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập.",
      "loi"
    );
    return;
  }

  danhSachTaiKhoan.push({ taiKhoan, matKhau });
  oMatKhau.value = "";
  hienThiThongBao("Đăng ký thành công! Bây giờ hãy đăng nhập.", "thanh-cong");
}

function dangNhap() {
  const taiKhoan = oTaiKhoan.value.trim();
  const matKhau = oMatKhau.value;
  const thongTinTaiKhoan = timTaiKhoan(taiKhoan);

  if (!thongTinTaiKhoan || thongTinTaiKhoan.matKhau !== matKhau) {
    hienThiThongBao("Sai tài khoản hoặc mật khẩu.", "loi");
    return;
  }

  taiKhoanDangNhap = thongTinTaiKhoan;
  oTaiKhoan.value = "";
  oMatKhau.value = "";
  oThongBaoLoi.textContent = "";
  hienThiManHinh();
}

function dangXuat() {
  taiKhoanDangNhap = null;
  hienThiManHinh();
}

function hienThiManHinh() {
  const daDangNhap = taiKhoanDangNhap !== null;
  oManHinhDangNhap.style.display = daDangNhap ? "none" : "block";
  oManHinhCuaHang.style.display = daDangNhap ? "block" : "none";

  if (daDangNhap) {
    oTenDangNhap.textContent = taiKhoanDangNhap.taiKhoan;
  }
}

const danhSachSanPham = [
  { id: "SP001", ten: "Áo thun", gia: 150000 },
  { id: "SP002", ten: "Quần jean", gia: 350000 },
  { id: "SP003", ten: "Giày sneaker", gia: 500000 },
  { id: "SP004", ten: "Mũ lưỡi trai", gia: 80000 },
  { id: "SP005", ten: "Balo", gia: 250000 }
];

let gioHang = [];

const oBangSanPham = document.getElementById("bangSanPham");
const oBangGioHang = document.getElementById("bangGioHang");
const oTongTien = document.getElementById("tongTien");
const oNutThanhToan = document.getElementById("btnThanhToan");

function dinhDangTien(soTien) {
  return `$${soTien.toLocaleString("en-US")}`;
}

function timSanPham(id) {
  for (let i = 0; i < danhSachSanPham.length; i += 1) {
    if (danhSachSanPham[i].id === id) {
      return danhSachSanPham[i];
    }
  }

  return null;
}

function hienThiSanPham() {
  oBangSanPham.replaceChildren();

  danhSachSanPham.forEach((sanPham) => {
    const dong = document.createElement("tr");
    const oTen = document.createElement("td");
    const oGia = document.createElement("td");
    const oThaoTac = document.createElement("td");
    const nutThem = document.createElement("button");

    oTen.textContent = sanPham.ten;
    oGia.textContent = dinhDangTien(sanPham.gia);
    nutThem.type = "button";
    nutThem.className = "btn-them";
    nutThem.textContent = "Thêm vào giỏ";
    nutThem.addEventListener("click", () => themVaoGio(sanPham.id));
    oThaoTac.append(nutThem);
    dong.append(oTen, oGia, oThaoTac);
    oBangSanPham.append(dong);
  });
}

function hienThiGioHang() {
  oBangGioHang.replaceChildren();

  if (gioHang.length === 0) {
    const thongBaoTrong = document.createElement("p");
    thongBaoTrong.className = "gio-trong";
    thongBaoTrong.textContent = "Giỏ hàng đang trống.";
    oBangGioHang.append(thongBaoTrong);
    oTongTien.textContent = dinhDangTien(0);
    oNutThanhToan.disabled = true;
    return;
  }

  const bang = document.createElement("table");
  const tieuDe = document.createElement("thead");
  const dongTieuDe = document.createElement("tr");
  const thanBang = document.createElement("tbody");
  const tieuDeCot = ["Sản phẩm", "SL", "Thành tiền", ""];

  tieuDeCot.forEach((noiDung) => {
    const oTieuDe = document.createElement("th");
    oTieuDe.textContent = noiDung;
    dongTieuDe.append(oTieuDe);
  });
  tieuDe.append(dongTieuDe);

  let tongTien = 0;
  gioHang.forEach((monHang, viTri) => {
    const sanPham = timSanPham(monHang.id);
    if (!sanPham) {
      return;
    }

    const thanhTien = sanPham.gia * monHang.soLuong;
    tongTien += thanhTien;

    const dong = document.createElement("tr");
    const oTen = document.createElement("td");
    const oSoLuong = document.createElement("td");
    const oThanhTien = document.createElement("td");
    const oThaoTac = document.createElement("td");
    const nutXoa = document.createElement("button");

    oTen.textContent = sanPham.ten;
    oSoLuong.textContent = String(monHang.soLuong);
    oThanhTien.textContent = dinhDangTien(thanhTien);
    nutXoa.type = "button";
    nutXoa.className = "btn-xoa";
    nutXoa.textContent = "Xóa";
    nutXoa.setAttribute("aria-label", `Xóa ${sanPham.ten} khỏi giỏ hàng`);
    nutXoa.addEventListener("click", () => xoaKhoiGio(viTri));
    oThaoTac.append(nutXoa);
    dong.append(oTen, oSoLuong, oThanhTien, oThaoTac);
    thanBang.append(dong);
  });

  bang.append(tieuDe, thanBang);
  oBangGioHang.append(bang);
  oTongTien.textContent = dinhDangTien(tongTien);
  oNutThanhToan.disabled = false;
}

function themVaoGio(id) {
  const sanPham = timSanPham(id);
  if (!sanPham) {
    return;
  }

  const monHang = gioHang.find((mon) => mon.id === id);
  if (monHang) {
    monHang.soLuong += 1;
  } else {
    gioHang.push({ id, soLuong: 1 });
  }

  hienThiGioHang();
}

function xoaKhoiGio(viTri) {
  if (!Number.isInteger(viTri) || viTri < 0 || viTri >= gioHang.length) {
    return;
  }

  gioHang.splice(viTri, 1);
  hienThiGioHang();
}

function thanhToan() {
  if (gioHang.length === 0) {
    return;
  }

  const tongTien = gioHang.reduce((tong, monHang) => {
    const sanPham = timSanPham(monHang.id);
    return tong + (sanPham ? sanPham.gia * monHang.soLuong : 0);
  }, 0);

  window.alert(`Đặt hàng thành công! Tổng thanh toán: ${dinhDangTien(tongTien)}.`);
  gioHang = [];
  hienThiGioHang();
}

hienThiManHinh();
hienThiSanPham();
hienThiGioHang();
