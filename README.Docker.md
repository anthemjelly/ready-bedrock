# Minecraft 基岩版 Docker 伺服器 - Docker 部署說明
✅ 容器化一鍵部署 | ✅ 開發/生產雙環境 | ✅ DevContainer 支援 | ✅ 秒啟動優化

基於 `itzg/minecraft-bedrock-server` 構建的專業級基岩版伺服器模板

---

## 📁 實際檔案架構
```
.
├── Base.docker                  # 基礎鏡像建構檔案
├── docker-compose.yml           # 生產環境設定
├── .gitignore                   # Git 忽略檔案
├── README.md                    # 主要專案說明
├── README.docker.md             # 本檔案：Docker 部署專用說明
├── LICENSE                      # 授權條款
│
├── .devcontainer/               # DevContainer 開發環境設定
│   ├── devcontainer.json        # VS Code DevContainer 設定
│   └── docker-compose.dev.yml   # 開發環境 Compose 設定
│
├── worlds/                      # 世界存檔（不提交 Git）
├── addons/                      # 行為包/資源包（自動生成）
└── backups/                     # 備份檔案（不提交 Git）
```

---

## 🚀 快速啟動

### 生產環境（正式服/公網聯機）
```bash
docker-compose up -d
```

### 開發環境（測試/除錯 Addon/允許作弊）
```bash
docker-compose -f .devcontainer/docker-compose.dev.yml up -d
```

### 使用 VS Code DevContainer（推薦開發者）
1. 打開 VS Code
2. 安裝 **Dev Containers** 擴充功能
3. 按 `F1` → 選擇 **"Dev Containers: Reopen in Container"**
4. 自動建構並進入開發環境

---

## 📊 常用指令

### 查看即時日誌
```bash
# 生產服
docker logs -f mc-bedrock-production

# 開發服
docker logs -f mc-bedrock-dev
```

### 關閉伺服器
```bash
# 生產服
docker-compose down

# 開發服
docker-compose -f .devcontainer/docker-compose.dev.yml down
```

### 重新建構鏡像
```bash
# 生產服
docker-compose up -d --build

# 開發服
docker-compose -f .devcontainer/docker-compose.dev.yml up -d --build
```

### 查看在線玩家
```bash
docker exec mc-bedrock-production list
```

---

## 🌍 連線方式

### 本地連線
- 位址：`localhost`
- 端口：`19132`

### 區域網路連線
- 位址：你的電腦區網 IP（例如 `192.168.1.100`）
- 端口：`19132`

### 外網連線
推薦使用 **playit.gg**（UDP 穿透，無需路由器設定）
或路由器端口映射：`UDP 19132`

---

## ⚙️ 核心優化設定
- ✅ 非 Root 權限執行（UID=10001），安全穩定
- ✅ 關閉冗餘備份，秒級啟動
- ✅ 鎖定版本，不自動更新
- ✅ 自動建立世界，無需手動設定
- ✅ 完整日誌輪替，避免磁碟爆滿

---

## 🎯 Addon 開發說明
開發的 Addon 放入 `addons/` 資料夾
重啟伺服器即可載入，DevContainer 環境支援即時熱更新

---

## 📝 授權條款
詳見 `LICENSE` 檔案