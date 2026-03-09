<#
.SYNOPSIS
Minecraft Bedrock Addon 快速測試腳本（Docker 專用）
這個腳本用不了
#>

# ==================== 設定 ====================
$AddonName = "vault-inventory"  # 你的 Addon 資料夾名稱
$ContainerName = "mc-bedrock-prod"
$AddonPath = "./addons/$AddonName"
$ManifestPath = "$AddonPath/manifest.json"
$ScriptPath = "$AddonPath/scripts/main.js"

# ==================== 顏色輸出 ====================
function Write-ColorOutput($Message, $Color) {
    Write-Host $Message -ForegroundColor $Color
}

# ==================== 1. 檢查 Addon 資料夾 ====================
Write-ColorOutput "`n=== 開始測試 Addon: $AddonName ===" "Cyan"

if (-not (Test-Path $AddonPath)) {
    Write-ColorOutput "❌ 錯誤：找不到 Addon 資料夾 $AddonPath" "Red"
    exit 1
}
Write-ColorOutput "✅ Addon 資料夾存在" "Green"

# ==================== 2. 檢查 manifest.json ====================
if (-not (Test-Path $ManifestPath)) {
    Write-ColorOutput "❌ 錯誤：找不到 manifest.json" "Red"
    exit 1
}
Write-ColorOutput "✅ manifest.json 存在" "Green"

# ==================== 3. 檢查 JSON 格式 ====================
try {
    $Manifest = Get-Content $ManifestPath -Raw | ConvertFrom-Json
    Write-ColorOutput "✅ manifest.json JSON 格式正確" "Green"
} catch {
    Write-ColorOutput "❌ 錯誤：manifest.json JSON 格式錯誤" "Red"
    Write-ColorOutput $_.Exception.Message "Red"
    exit 1
}

# ==================== 4. 檢查 UUID ====================
$HeaderUUID = $Manifest.header.uuid
$ModuleUUID = $Manifest.modules[0].uuid

if ($HeaderUUID -match "^x" -or $HeaderUUID -match "^X") {
    Write-ColorOutput "⚠️  警告：header 的 UUID 還是佔位符，請替換成真實 UUID" "Yellow"
} else {
    Write-ColorOutput "✅ header UUID 正常" "Green"
}

if ($ModuleUUID -match "^x" -or $ModuleUUID -match "^X") {
    Write-ColorOutput "⚠️  警告：modules 的 UUID 還是佔位符，請替換成真實 UUID" "Yellow"
} else {
    Write-ColorOutput "✅ modules UUID 正常" "Green"
}

# ==================== 5. 檢查腳本檔案（如果是行為包） ====================
if (Test-Path $ScriptPath) {
    Write-ColorOutput "✅ 腳本檔案 $ScriptPath 存在" "Green"
} else {
    Write-ColorOutput "⚠️  提示：找不到腳本檔案（如果是資源包可忽略）" "Yellow"
}

# ==================== 6. 重啟 Docker 容器 ====================
Write-ColorOutput "`n=== 重啟 Docker 容器 ===" "Cyan"
docker-compose down
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "❌ 錯誤：無法關閉容器" "Red"
    exit 1
}

docker-compose up -d
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "❌ 錯誤：無法啟動容器" "Red"
    exit 1
}
Write-ColorOutput "✅ 容器已重啟" "Green"

# ==================== 7. 看日誌 ====================
Write-ColorOutput "`n=== 開始監看日誌（按 Ctrl+C 停止） ===" "Cyan"
Write-ColorOutput "🔍 找這行代表 Addon 成功載入：" "Cyan"
Write-ColorOutput "   [Scripting] Loading behavior pack: 全域共享保險箱" "Gray"
Write-ColorOutput "`n"

docker logs -f $ContainerName