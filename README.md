# 自製 Tailwind Component

# 使用 Vue 3 + Typescript + Vite

Developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` 。

## Tailwind 安裝方式

1.npm i tailwindcss
2.npm i autoprefixer
3.npm i postcss

### 並於 src 同層位置，創建 postcss.config.js 檔案

內容如下:
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}

## 產生 Tailwind 設定檔案的方式

npx tailwindcss init --full  
ps.--funn 可以產生完整的預設設定列表
