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
### btn3樣式調整
**rotateX和rotaeY為90度的時候為"看不見"的狀態
**因此改變before和after的初始狀態為0或90度；並相hover時的rotate就可以有向外擴張或向內閉合的效果。
### btn4樣式調整
**基本上和btn3是同樣的概念，只是border-radius是100%，並且外框hover時邊框會消失。
### btn5樣式
**透過letter-spacing表現字體的擴張效果

### <a href="https://gn01792218.github.io/vue3-tailwind-component">元件DEMO</a>
- checkBox  <br>
- knob <br>
