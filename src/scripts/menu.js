const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
// 如果hamburger和navLinks都存在, 则添加点击事件监听器
if (hamburger && navLinks) {
    // 给汉堡包添加点击事件监听器
    hamburger.addEventListener("click", () => {
        // toggle 如果存在则移除, 不存在则添加, 这样就实现了点击可切换导航菜单的显示和隐藏
        navLinks.classList.toggle("expanded");
    });
}