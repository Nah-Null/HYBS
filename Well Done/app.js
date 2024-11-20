// ฟังก์ชันสลับระหว่างฟอร์ม Login และ Sign Up
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    // สลับการแสดงผลของฟอร์ม Login และ Sign Up
    loginForm.classList.toggle('d-none');
    signupForm.classList.toggle('d-none');
}

// ฟังก์ชันเก็บข้อมูลจากฟอร์ม Sign Up และบันทึกลงใน localStorage
function storeInputValues() {
    // ดึงข้อมูลจากฟอร์ม Sign Up
    const name = document.getElementById('signup-name').value;
    const username = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบถ้วน
    if (!name || !username || !password) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return; // หากข้อมูลไม่ครบ จะไม่ทำการบันทึก
    }

    // เก็บข้อมูลลงใน localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // ยืนยันข้อมูลที่เก็บใน localStorage
    // alert("ข้อมูลถูกบันทึกเรียบร้อยแล้ว!");

    toggleForm(); // สลับฟอร์ม

    // หากต้องการไปยังหน้าอื่นๆ สามารถเปิดใช้งานได้ เช่น:
    // window.location.href = "next.html";  // ไปยังหน้าถัดไป
}

// ฟังก์ชันตรวจสอบข้อมูล Login
function check_up() {
    const user = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;

    // ตรวจสอบว่าได้กรอกข้อมูลครบหรือไม่
    if (!user || !pass) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return; // หากข้อมูลไม่ครบ จะไม่ทำการตรวจสอบ
    }

    // ดึงข้อมูลจาก localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // ตรวจสอบว่า username และ password ตรงกันหรือไม่
    if (storedUsername === user && storedPassword === pass) {
        // หากข้อมูลตรงกันให้ไปยัง URL ถัดไป
        // open_member();  สลับไปยังฟอร์มสมาชิก
        window.location.replace("https://nah-null.github.io/HYBS_mumber/Well%20Done/well%20done.html");
    } else {
        // หากข้อมูลไม่ตรง ให้แจ้งเตือนผู้ใช้
        alert("ข้อมูลที่กรอกไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง!");
    }
}

function open_member() {
    const memberForm = document.getElementById('Mumber-Form');  // ฟอร์มสมาชิก
    const loginForm = document.getElementById('login-form');
    
    // สลับการแสดงผลของฟอร์ม Login และ ฟอร์มสมาชิก
    loginForm.classList.add('d-none');  // ซ่อนฟอร์ม Login
    memberForm.classList.remove('d-none');  // แสดงฟอร์มสมาชิก
    
    // เคลียร์ค่าฟอร์ม Login หลังจากเข้าสู่ระบบสำเร็จ
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';

    // ดึงข้อมูลจาก localStorage มาแสดงในฟอร์มสมาชิก
    document.getElementById('name').innerText = localStorage.getItem('name'); // แสดงชื่อ
    document.getElementById('user').innerText = localStorage.getItem('username'); // แสดง username
}

// ฟังก์ชันสำหรับออกจากระบบ
function logout() {
    // ลบข้อมูลใน localStorage
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // ซ่อนฟอร์มสมาชิกและแสดงฟอร์ม Login
    const memberForm = document.getElementById('Mumber-Form');
    const loginForm = document.getElementById('login-form');

    memberForm.classList.add('d-none'); // ซ่อนฟอร์มสมาชิก
    loginForm.classList.remove('d-none'); // แสดงฟอร์ม Login

    // เคลียร์ค่าฟอร์ม
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    alert("คุณได้ออกจากระบบเรียบร้อยแล้ว");
}