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
#### btn3樣式調整
**rotateX和rotaeY為90度的時候為"看不見"的狀態
**因此改變before和after的初始狀態為0或90度；並相hover時的rotate就可以有向外擴張或向內閉合的效果。
#### btn4樣式調整
**基本上和btn3是同樣的概念，只是border-radius是100%，並且外框hover時邊框會消失。
#### btn5樣式
**透過letter-spacing表現字體的擴張效果
#### btn10樣式
**利用before元素 高度的改變製造出的效果，改變hover時的高度可以調整視覺效果。
#### btn13樣式
**利用boxshadow的shadow值為0製造出另一個相同形狀，然後進行hover時的位移達到效果。
#### btn14樣式
**利用css mix-blend-mode 製作出疊色效果。
#### btn15樣式
**利用元素本身及其內部的span製造出四個before、after區塊，並設置各自特殊的初始位置。
**hover的時候所有偽元素都回到button內。
**可以利用時間差、區塊初始位置的不同，來達到各種不同的特效。
#### btn16樣式
**原按鈕尺寸200*80 ； 為了製作線條拉長交叉的效果。before負責左右紅色線條，寬度不變，高度增加30px，初始位置left-15px；after負責上下咖啡色線條,高度不變，寬度增加30px，初始位置top-15px。
**hover時將before rotaY180；after rotaX180。就可以達到線條互換效果
**可以將線條左上、右下做成兩組相同顏色，製造不同的視覺效果。
#### btn18樣式
**旋轉的字體為span製造，hover時放大+轉1圈
#### btn19樣式
**使用四個before和after分別製作四個邊線，hover時改變position即可。
#### btn20樣子
**button的外框是由span製造的;上下缺口是span:before 底色白色 寬度８％高度2００％並旋轉４５度製造的（z-index-1);hover時span:before寬度變回１００％
#### btn21樣式
**變形使用skew30deg
#### btn22樣式
**使用before偽元素，大小、底色和原本btn一樣；hover時，scale放大、opacity變成0(有設置transition，所以有漣漪的過渡效果)。
**原本的btn hover時往上位移5px，並設置下方陰影；active時位移回到原位，陰影也變小。
#### btn23樣式
**使用沒有寬高的before和after之邊框製作出菱形。邊框粗度為按鈕本體之一半；before:border-t、border-b同樣顏色，border-r設置為透明色；after:改border-l為透明色。
### card組件
#### Card5樣式
**文字部分hover時，delay0.5秒才出現；離開時正常運行動畫
#### Card6樣式
**遮罩長寬大於卡片本體；初始旋轉45度，放置右下角；hover時，回復原位(旋轉角度不變)
**卡片內容各自有自己的初始化位置，並在hover時，設置delay回復到原位。
#### Card8樣式
**hover時圖片先縮小-->再放大遮罩(hover時delay300秒) ； 離開時遮罩先縮小-->再放大圖片(圖片元素本身delay300秒)
### nav組件
#### nav1樣式
**li項目的before之 transform-origin為left；after為right。兩者初始scale為0
**hover時兩者scale回到1
#### nav4、5樣式
**運用transform-origin 和scaleX或scaleY來調整hover時的動畫。
**after和before元素本身設置delay達到階層式出場的效果。
#### nav9樣式
**文字由li內的a連結兩個span組成；被景色由a:before組成
**hover時，文字先位移，背景才由左至由填滿(scaleX(1)) ； 恢復時，背景由左至右消失((scaleX(0)))，文字才位移回來。
- checkBox  <br>
- knob <br>
