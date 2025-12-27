# SM-Tools: Favicon生成工具集

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

一个功能丰富的在线favicon生成工具集，支持多种方式创建网站图标。

## 📌 项目概述

SM-Tools是一个轻量级的Web应用，专注于提供简单易用的favicon生成功能。无论您是希望将表情符号、图片还是文本转换为favicon，这个工具集都能满足您的需求。

## 🎯 核心功能

### 1. Emoji转Favicon (emoji-to-favicon.html)
- 将任何表情符号转换为高质量的favicon
- 支持自定义背景色和尺寸
- 实时预览效果

### 2. 图片转Favicon (image-to-favicon.html)
- 支持JPG、PNG、GIF等常见图片格式
- 自动裁剪和调整尺寸
- 保留图片核心内容

### 3. 文本转Favicon (text-to-favicon.html)
- 使用自定义文本创建favicon
- 多种字体和颜色选择
- 支持添加背景和效果

### 4. Logo生成器 (logo.html)
- 创建专业的网站logo
- 提供多种模板和样式
- 导出高质量图像

### 5. 教程指南 (tutorials.html)
- 详细的使用教程
- favicon最佳实践
- 常见问题解答

## 🛠️ 技术栈

- **前端技术**: HTML5, CSS3, JavaScript
- **样式框架**: 自定义CSS组件
- **图标库**: Material Symbols Outlined
- **文件处理**: FileSaver.js, JSZip

## 📁 项目结构

```
sm-tools/
├── assets/                 # 静态资源
│   ├── css/               # 样式文件
│   │   ├── common.css     # 公共样式
│   │   ├── footer.css     # 页脚样式
│   │   └── z.*.css        # 各功能模块样式
│   ├── font/              # 字体资源
│   ├── static/            # 静态图片
│   └── favicons/          # 网站图标
├── js/                    # JavaScript文件
│   ├── check.js           # 核心功能脚本
│   └── libs/              # 第三方库
│       ├── FileSaver.js   # 文件保存功能
│       └── jszip/         # ZIP文件处理
├── emoji-to-favicon.html  # Emoji转Favicon页面
├── image-to-favicon.html  # 图片转Favicon页面
├── text-to-favicon.html   # 文本转Favicon页面
├── logo.html              # Logo生成器页面
├── tutorials.html          # 教程页面
├── index.html             # 主页
└── wrangler.toml          # Cloudflare Workers配置
```

## 🚀 快速开始

### 本地部署

1. 克隆项目
```bash
git clone https://github.com/your-username/sm-tools.git
cd sm-tools
```

2. 使用Nginx部署

编辑Nginx配置文件:

```nginx
server {
    listen       8001;
    server_name  localhost;

    location / {
        # 设置不缓存
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
        root   /path/to/sm-tools;  # 替换为实际路径
        index  index.html;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

3. 重启Nginx并访问
```
http://localhost:8001
```

### Cloudflare Workers部署

项目已配置了wrangler.toml，可以直接部署到Cloudflare Workers:

```bash
# 安装wrangler
npm install -g wrangler

# 登录Cloudflare
wrangler login

# 部署
wrangler publish
```

## 🤝 贡献指南

欢迎提交问题和拉取请求！如果您想贡献代码，请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启拉取请求

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢所有为这个项目做出贡献的开发者
- 特别感谢 Material Design 提供的图标资源

## 📞 联系我们

如果您有任何建议或问题，欢迎通过以下方式联系我们：

- 提交 [Issue](https://github.com/your-username/sm-tools/issues)
- 发送邮件至: your-email@example.com

---

如果这个项目对您有帮助，请给我们一个 ⭐️！
