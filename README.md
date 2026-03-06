# Minecraft 基岩版 Docker 伺服器
✅ 容器化一键部署 | ✅ 开发/生产双环境 | ✅ 秒启动优化 | ✅ 支持Addon开发

基于 itzg/minecraft-bedrock-server 构建，开箱即用的基岩版官方服务器模板

## 🚀 快速启动
### 生产环境（正式服/公网联机）
```bash
docker-compose up -d
```

### 开发环境（测试/调试Addon/允许作弊）
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### 查看实时日志
```bash
# 生产服
docker logs -f mc-bedrock-production

# 开发服
docker logs -f mc-bedrock-dev
```

### 关闭服务器
```bash
# 生产服
docker-compose down

# 开发服
docker-compose -f docker-compose.dev.yml down
```

## 🌍 连接方式
### 本地连接
- 地址：`localhost`
- 端口：`19132`

### 局域网连接
- 地址：你的电脑局域网IP（如 `192.168.1.100`）
- 端口：`19132`

### 外网连接
使用 **playit.gg**（UDP穿透，无需路由器设置）
或路由器端口映射：`UDP 19132`

## 📁 项目结构
```
.
├── /.devcontainer
├────── compose.yml          # 开发环境配置
├────── devcontainer.json
├── Base.docker              # 基础镜像构建文件
├── compose.yml              # 生产环境配置
├── .gitignore               # Git 忽略文件
├── README.md                # 项目说明
├── README.docker.md         # Docker说明
├── worlds/                  # 世界存档（不提交Git）
├── addons/                  # 行为包/资源包（自动生成）
└── backups/                 # 备份文件（不提交Git）
```

## ⚙️ 核心特性
- ✅ 非Root权限运行，安全稳定
- ✅ 关闭冗余备份，秒级启动
- ✅ 自动创建世界，无需手动配置
- ✅ 开发环境热更新Addon
- ✅ 适配Windows/Linux/Mac
- ✅ 完整Git忽略配置，仓库干净整洁

## 🎯 Addon 开发说明
开发的Addon放入 `addons/` 文件夹
重启服务器即可加载，开发环境支持实时热更

## 📝 许可证
MIT License - 自由使用与修改