// ===== HIỂN THỊ / ẨN MENU =====
function toggleMenu() {
    // Lấy phần tử có id là "menu"
    const menu = document.getElementById("menu");

    // Nếu menu đang hiển thị (display: block) thì ẩn đi
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Ẩn menu
    } else {
        // Ngược lại, nếu menu đang ẩn thì hiển thị ra
        menu.style.display = "block"; // Hiện menu
    }
    // 👉 Hàm này dùng cho việc bấm nút để mở/đóng menu (ví dụ trên điện thoại).
}

// ===== CHUYỂN GIỮA CÁC TAB (NÓNG / MỚI / VIDEO / CHỦ ĐỀ) =====
function showTab(tabName) {
    // Ẩn tất cả các tab nội dung trước (set display = none)
    document.getElementById("nongTab").style.display = "none";
    document.getElementById("moiTab").style.display = "none";
    document.getElementById("videoTab").style.display = "none";
    document.getElementById("chudeTab").style.display = "none";

    // Dựa vào tên tab được truyền vào, hiển thị đúng tab đó
    if (tabName === "nong") {
        document.getElementById("nongTab").style.display = "flex";
    } else if (tabName === "moi") {
        document.getElementById("moiTab").style.display = "flex";
    } else if (tabName === "video") {
        document.getElementById("videoTab").style.display = "flex";
    } else if (tabName === "chude") {
        document.getElementById("chudeTab").style.display = "flex";
    }

    // ===== CẬP NHẬT HIỆU ỨNG "ACTIVE" CHO MENU =====
    const navItems = document.querySelectorAll(".navbar ul li");
    navItems.forEach(item => item.classList.remove("active")); // Xóa hết
    document.getElementById("tab-" + tabName).classList.add("active"); // Gạch chân đúng tab được bấm
    

    // 👉 Khi bấm vào 1 tab (ví dụ "Video"), thì chỉ nội dung "Video" hiển thị ra, các tab khác bị ẩn.
}

// ===== HIỂN THỊ MODAL ĐĂNG NHẬP =====
function showLoginModal() {
    // Lấy modal đăng nhập và set display = block để hiện ra
    document.getElementById("loginModal").style.display = "block";

    // 👉 Khi người dùng bấm "Đăng nhập", cửa sổ nhỏ đăng nhập sẽ hiện ra.
}

// ===== ĐÓNG MODAL ĐĂNG NHẬP =====
function closeLoginModal() {
    // Lấy modal đăng nhập và set display = none để ẩn đi
    document.getElementById("loginModal").style.display = "none";

    // 👉 Khi người dùng bấm nút "X" hoặc bấm ra ngoài modal, modal sẽ đóng lại.
}

// ===== KÍCH HOẠT NÚT ĐĂNG NHẬP ZALO KHI ĐỒNG Ý ĐIỀU KHOẢN =====
document.getElementById("termsCheckbox").addEventListener("change", function() {
    // Lấy nút đăng nhập Zalo
    const loginButton = document.querySelector(".zalo-login-btn");

    // Nếu checkbox được tick, thì bật nút đăng nhập. Nếu bỏ tick, thì tắt nút đăng nhập.
    loginButton.disabled = !this.checked;

    // 👉 Điều kiện bắt buộc: Người dùng phải tích chọn đồng ý điều khoản thì mới cho đăng nhập.
});

// ===== XỬ LÝ ĐĂNG NHẬP ZALO (GIẢ LẬP) =====
function loginWithZalo() {
    // Tạo đường link tới trang đăng nhập Zalo
    const zaloLink = "https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F";

    // Mở liên kết Zalo trong tab mới của trình duyệt
    window.open(zaloLink, "_blank");

    // 👉 Khi bấm nút "Đăng nhập bằng Zalo", sẽ mở trang Zalo ra cho người dùng đăng nhập.
}
