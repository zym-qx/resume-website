// resume-templates.js - 不同行业简历模板配置
const resumeTemplates = {
  // 前端开发模板（默认）
  frontend: {
    name: "前端开发工程师",
    data: {
      profile: {
        name: "张三",
        title: "前端开发高级工程师 | 5年经验",
        avatar: "", // 头像占位
        contact: {
          phone: "13800138000",
          email: "zhangsan@example.com",
          github: "github.com/zhangsan"
        },
        intro: "具备丰富的前端开发经验，精通HTML/CSS/JavaScript，熟练使用React、Vue等框架，注重用户体验和代码质量，擅长解决复杂的前端交互问题。"
      },
      experience: [
        {
          title: "前端开发高级工程师",
          subtitle: "XX科技有限公司 | 2020.03 - 至今",
          desc: [
            "负责公司核心产品的前端架构设计和开发，优化页面加载速度30%+",
            "主导React组件库的建设，提升团队开发效率50%+",
            "参与跨端方案落地，实现一套代码多端运行（Web/小程序/APP）",
            "指导初级开发工程师，提升团队整体技术水平"
          ]
        }
      ],
      project: [
        {
          title: "企业管理系统前端开发",
          subtitle: "项目负责人 | 2021.06 - 2022.01 | 团队规模：5人",
          desc: "项目描述：为大型企业开发的内部管理系统，涵盖员工管理、数据统计、权限分配等核心功能，支持多角色登录和个性化配置。",
          points: [
            "使用React + Ant Design构建前端页面，封装10+通用组件，提升开发复用率",
            "对接后端API接口，实现数据实时同步，优化接口请求速度，减少加载延迟",
            "负责权限模块开发，实现基于角色的权限控制（RBAC），保障系统数据安全",
            "项目上线后，帮助企业提升管理效率40%，获得客户高度认可"
          ]
        }
      ],
      // 其他板块省略（与默认模板一致）
    }
  },
  // 产品经理模板
  product: {
    name: "产品经理",
    data: {
      profile: {
        name: "李四",
        title: "产品经理 | 4年经验 | 电商/SAAS",
        avatar: "",
        contact: {
          phone: "13900139000",
          email: "lisi@example.com",
          github: ""
        },
        intro: "专注电商/SAAS领域产品设计，精通从0到1产品全生命周期管理，擅长需求分析、PRD撰写、用户调研，具备优秀的跨团队沟通能力。"
      },
      experience: [
        {
          title: "高级产品经理",
          subtitle: "XX电商公司 | 2021.01 - 至今",
          desc: [
            "负责电商平台核心交易模块产品设计，优化下单转化率15%+",
            "主导用户增长体系搭建，设计签到、裂变等活动，新增日活2w+",
            "协调研发、设计、运营团队，推动产品迭代落地，按时交付率95%+"
          ]
        }
      ],
      // 其他板块适配产品经理场景
    }
  },
  // 设计师模板
  designer: {
    name: "UI/UX设计师",
    data: {
      profile: {
        name: "王五",
        title: "UI/UX设计师 | 3年经验 | 视觉/交互",
        avatar: "",
        contact: {
          phone: "13700137000",
          email: "wangwu@example.com",
          github: ""
        },
        intro: "擅长移动端/网页UI设计、交互原型设计，精通Figma/PS/AE等工具，注重用户体验，能独立完成从需求到落地的全流程设计。"
      },
      // 其他板块适配设计师场景
    }
  }
};

// 初始化模板
function initTemplate(templateKey) {
  const template = resumeTemplates[templateKey];
  if (!template) return;
  
  // 填充个人信息
  document.querySelector('#profile .item-title').textContent = template.data.profile.name;
  document.querySelector('#profile .item-subtitle').textContent = template.data.profile.title;
  document.querySelectorAll('#profile .editable')[2].textContent = template.data.profile.contact.phone;
  document.querySelectorAll('#profile .editable')[3].textContent = template.data.profile.contact.email;
  document.querySelector('#profile p.editable').textContent = template.data.profile.intro;
  
  // 清空并填充工作经历
  const experienceContainer = document.querySelector('#experience .space-y-6');
  // 保留添加按钮，清空原有内容
  const addBtn = document.getElementById('addExperienceBtn');
  experienceContainer.innerHTML = '';
  experienceContainer.appendChild(addBtn);
  
  template.data.experience.forEach(item => {
    const expItem = document.createElement('div');
    expItem.className = 'border-l-4 border-primary pl-4';
    expItem.innerHTML = `
      <h3 class="item-title editable" contenteditable="true">${item.title}</h3>
      <p class="item-subtitle editable" contenteditable="true">${item.subtitle}</p>
      <ul class="mt-2 list-disc list-inside text-gray-700 space-y-1">
        ${item.desc.map(desc => `<li class="editable" contenteditable="true">${desc}</li>`).join('')}
      </ul>
    `;
    experienceContainer.insertBefore(expItem, addBtn);
  });
  
  // 其他板块同理填充（项目经历、教育背景等）
  alert(`已加载「${template.name}」模板，可开始编辑！`);
}

// 导出模板配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { resumeTemplates, initTemplate };
}