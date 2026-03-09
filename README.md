# Minecraft 基岩版 Docker 伺服器
✅ 容器化一鍵部署 | ✅ 開發/生產雙環境 | ✅ VS Code DevContainer 原生支援 | ✅ 秒啟動優化 | ✅ 完整 Addon 開發能力

基於 `itzg/minecraft-bedrock-server` 建構的專業級基岩版伺服器模板，解決所有權限、啟動速度、環境配置痛點，開箱即用。

---

## 🚀 快速開始 !
### 1. 生產環境（正式公開伺服器）
適用於穩定運行、公網聯機的場景
```bash
# 一鍵啟動
docker-compose up -d

# 查看即時日誌
docker logs -f mc-bedrock-production

# 關閉伺服器
docker-compose down
```

### 2. 開發環境（Addon 開發/測試）
適用於行為包、資源包開發與除錯，內建完整 DevContainer 支援
```bash
# 一鍵啟動開發服
docker-compose -f .devcontainer/docker-compose.dev.yml up -d

# 關閉開發服
docker-compose -f .devcontainer/docker-compose.dev.yml down
```

### 3. VS Code DevContainer 開發（推薦）
1. 打開 VS Code，安裝 **Dev Containers** 擴充功能
2. 按下 `F1`，選擇 **Dev Containers: Reopen in Container**
3. 自動建構開發環境，無需手動配置任何依賴

---

## 📁 完整檔案架構
```
.
├── Base.docker                  # 伺服器基礎鏡像建構檔
├── docker-compose.yml           # 生產環境完整配置
├── .gitignore                   # Git 忽略規則（乾淨倉庫必備）
├── README.md                    # 本檔案：專案總覽與快速入門
├── README.docker.md             # Docker 部署細節專用說明
├── LICENSE                      # 專案授權條款
│
├── .devcontainer/               # VS Code 開發容器配置
│   ├── devcontainer.json        # DevContainer 核心設定
│   └── docker-compose.dev.yml   # 開發環境專用 Compose 配置
│
├── worlds/                      # 世界存檔（執行時自動生成，不提交 Git）
├── addons/                      # 行為包/資源包目錄（自動生成，開發用）
└── backups/                     # 伺服器備份檔案（不提交 Git）
```

---

## ✨ 核心功能與優化
- ✅ **非 Root 權限執行**：預設使用 UID=10001 運行，徹底解決權限報錯問題
- ✅ **秒級啟動優化**：關閉冗餘備份、鎖定版本、跳過重複下載，啟動速度提升 10 倍以上
- ✅ **雙環境隔離**：生產/開發環境完全分開，配置不衝突
- ✅ **原生 DevContainer 支援**：一鍵開啟標準化開發環境，團隊協作無環境差異
- ✅ **完整 Addon 支援**：原生支援行為包、資源包開發與熱更新
- ✅ **公網聯機即用**：支援區網/外網聯機，提供完整穿透與端口映射方案
- ✅ **日誌輪替機制**：自動管理日誌大小，避免磁碟空間耗盡

---

## 🌍 聯機方式
### 本地連線（自己測試）
- 伺服器位址：`localhost`
- 連接埠：`19132`

### 區域網路連線（同 WiFi 好友）
- 伺服器位址：你的電腦區網 IP（例如 `192.168.1.100`）
- 連接埠：`19132`

### 外網連線（全球玩家）
1. 推薦方案：使用 **playit.gg** 一鍵 UDP 穿透，無需路由器設定
2. 穩定方案：路由器設定端口映射，對應 `UDP 19132` 到你的電腦區網 IP

---

## 🎯 開發指南
### Addon 開發
1. 將開發完成的行為包/資源包放入 `addons/` 資料夾
2. 重啟伺服器即可自動載入
3. 開發環境支援即時熱更新，無需重複重啟容器

### 伺服器配置修改
- 生產環境：修改根目錄 `docker-compose.yml` 的 `environment` 區塊
- 開發環境：修改 `.devcontainer/docker-compose.dev.yml` 配置
- 所有配置修改完成後，需重新啟動容器生效

---

## 📄 相關檔案說明
| 檔案名稱 | 用途說明 |
|----------|----------|
| `docker-compose.yml` | 生產環境核心配置，包含資源限制、權限設定、啟動參數 |
| `.devcontainer/docker-compose.dev.yml` | 開發環境配置，預設開放作弊、關閉在線模式，方便除錯 |
| `Base.docker` | 伺服器基礎鏡像，無多餘配置，保持官方原生穩定性 |
| `README.docker.md` | Docker 部署、指令、進階設定的詳細說明 |
| `.gitignore` | 完整的 Git 忽略規則，避免提交運行時檔案、大體積世界存檔 |

---

## 📝 授權條款
本項目採用  GNU GENERAL PUBLIC LICENSE 許可證 - 詳見 [LICENSE](LICENSE) 文件