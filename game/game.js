const STEP     =36
let robotLeft  =1
function render() {
gameMap.innerHTML=`<div class="robot" style="transform:translateX(${robotLeft*STEP}px)">
</div>`
}
