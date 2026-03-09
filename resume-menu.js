// resume-menu.js - 简历目录（导航菜单）配置文件，可灵活修改、新增、删除目录
// 目录格式：{ id: 目录唯一标识（对应简历板块id）, name: 目录名称（显示在导航栏）, show: 是否显示（true/false） }
const resumeMenu = [
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
