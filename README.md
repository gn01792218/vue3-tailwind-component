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
## <a href="https://gn01792218.github.io/vue3-tailwind-component">元件DEMO</a>
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
### btn10樣式
**利用before元素 高度的改變製造出的效果，改變hover時的高度可以調整視覺效果。
### btn13樣式
**利用boxshadow的shadow值為0製造出另一個相同形狀，然後進行hover時的位移達到效果。
### btn14樣式
**利用css mix-blend-mode 製作出疊色效果。
### btn15樣式
**利用元素本身及其內部的span製造出四個before、after區塊，並設置各自特殊的初始位置。
**hover的時候所有偽元素都回到button內。
**可以利用時間差、區塊初始位置的不同，來達到各種不同的特效。
### btn16樣式
**原按鈕尺寸200*80 ； 為了製作線條拉長交叉的效果。before負責左右紅色線條，寬度不變，高度增加30px，初始位置left-15px；after負責上下咖啡色線條,高度不變，寬度增加30px，初始位置top-15px。
**hover時將before rotaY180；after rotaX180。就可以達到線條互換效果
**可以將線條左上、右下做成兩組相同顏色，製造不同的視覺效果。
### btn18樣式
**旋轉的字體為span製造，hover時放大+轉1圈

- checkBox  <br>
- knob <br>
