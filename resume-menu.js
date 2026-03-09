// resume-menu.js - 简历目录（导航菜单）配置文件，可灵活修改、新增、删除目录
// 目录格式：{ id: 目录唯一标识（对应简历板块id）, name: 目录名称（显示在导航栏）, show: 是否显示（true/false） }
let resumeMenu = [
    { id: "profile", name: "个人信息", show: true },
    { id: "experience", name: "工作经历", show: true },
    { id: "project", name: "项目经历", show: true },
    { id: "education", name: "教育背景", show: true },
    { id: "certificate", name: "证书荣誉", show: true },
    { id: "skills", name: "技能专长", show: true },
    { id: "language", name: "语言能力", show: true },
    { id: "self-evaluation", name: "自我评价", show: true },
    { id: "contact", name: "联系方式", show: true }
];

// 导出目录配置，供index.html引用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeMenu;
}

// 新增：目录操作方法（供index.html调用，实现页面直接操作）
const menuOperate = {
    // 隐藏/显示目录及对应板块
    toggleShow: function(id) {
        const menuItem = resumeMenu.find(item => item.id === id);
        if (menuItem) {
            menuItem.show = !menuItem.show;
            // 同步更新页面导航和对应板块显示状态（后续在index.html中调用）
            const navItem = document.querySelector(`[data-menu-id="${id}"]`);
            const section = document.getElementById(id);
            if (navItem && section) {
                navItem.style.display = menuItem.show ? "block" : "none";
                section.style.display = menuItem.show ? "block" : "none";
            }
            // 保存目录状态到本地存储
            localStorage.setItem("resumeMenu", JSON.stringify(resumeMenu));
        }
    },
    // 新增目录及对应板块
    addMenu: function(menuInfo) {
        // 验证id唯一性
        const isExist = resumeMenu.some(item => item.id === menuInfo.id);
        if (isExist) return false;
        // 添加目录
        resumeMenu.push({
            id: menuInfo.id,
            name: menuInfo.name,
            show: true
        });
        // 同步添加页面导航项和空白板块（后续在index.html中调用）
        this.addNavItem(menuInfo.id, menuInfo.name);
        this.addSection(menuInfo.id, menuInfo.name);
        // 保存目录状态到本地存储
        localStorage.setItem("resumeMenu", JSON.stringify(resumeMenu));
        return true;
    },
    // 辅助方法：新增导航项（供addMenu调用）
    addNavItem: function(id, name) {
        // 桌面端导航
        const desktopMenu = document.getElementById("desktopMenu");
        const desktopLi = document.createElement("li");
        desktopLi.dataset.menuId = id;
        desktopLi.innerHTML = `${name} `;
        desktopMenu.appendChild(desktopLi);
        // 移动端导航
        const mobileMenu = document.getElementById("mobileMenu");
        const mobileLi = document.createElement("li");
        mobileLi.dataset.menuId = id;
        mobileLi.innerHTML = `${name} `;
        mobileMenu.appendChild(mobileLi);
    },
    // 辅助方法：新增空白板块（供addMenu调用）
    addSection: function(id, name) {
        const main = document.getElementById("resumeMain");
        const section = document.createElement("section");
        section.id = id;
        section.className = "resume-card mb-8";
        section.innerHTML = `
           ${name}点击编辑${name}内容，可插入文字、图片、短视频...
        `;
        // 插入到联系方式板块之前
        const contactSection = document.getElementById("contact");
        main.insertBefore(section, contactSection);
    },
    // 新增：删除目录及对应板块
    removeMenu: function(id) {
        if (confirm("确定要删除该目录及对应板块吗？删除后不可恢复！")) {
            resumeMenu = resumeMenu.filter(item => item.id !== id);
            // 同步删除页面导航项和对应板块
            const navItems = document.querySelectorAll(`[data-menu-id="${id}"]`);
            navItems.forEach(item => item.remove());
            const section = document.getElementById(id);
            if (section) section.remove();
            // 保存目录状态到本地存储
            localStorage.setItem("resumeMenu", JSON.stringify(resumeMenu));
        }
    },
    // 初始化目录状态（从本地存储读取，保持刷新不丢失）
    initMenu: function() {
        const storedMenu = localStorage.getItem("resumeMenu");
        if (storedMenu) {
            resumeMenu = JSON.parse(storedMenu);
        }
        // 同步更新页面导航和板块显示状态
        resumeMenu.forEach(item => {
            const navItem = document.querySelector(`[data-menu-id="${item.id}"]`);
            const section = document.getElementById(item.id);
            if (navItem && section) {
                navItem.style.display = item.show ? "block" : "none";
                section.style.display = item.show ? "block" : "none";
            }
        });
    }
};

// 导出操作方法，供index.html调用
if (typeof window !== 'undefined') {
    window.resumeMenu = resumeMenu;
    window.menuOperate = menuOperate;
}