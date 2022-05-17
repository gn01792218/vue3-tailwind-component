# 自製 Tailwind Component

# 使用 Vue 3 + Typescript + Vite

Developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` 。<br>
1.運行專案npm run dev
2.打包專案npm run build
3.預覽打包專案 npm run preview

## Tailwind 安裝方式

1.npm i tailwindcss<br>
2.npm i autoprefixer<br>
3.npm i postcss<br>

### 並於 src 同層位置，創建 postcss.config.js 檔案

內容如下:
module.exports = {<br>
plugins: {<br>
tailwindcss: {},<br>
autoprefixer: {},<br>
},<br>
}<br>

## 產生 Tailwind 設定檔案的方式

npx tailwindcss init --full  <br>
ps.--funn 可以產生完整的預設設定列表<br>

## 自製元件說明
### btn組件
#### btn1樣式
調整transition-origin和rotate角度，就可以改變背景區塊地轉動方向。

### <a href="https://gn01792218.github.io/vue3-tailwind-component">元件DEMO</a>
- checkBox  <br>
- knob <br>
