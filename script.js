const shareBtnInfo = document.querySelector(".button_share_info");
const shareBtn = document.querySelector(".button_share")

shareBtn.addEventListener("click", () => {
    shareBtnInfo.classList.toggle('hidden');
    shareBtn.classList.toggle('active');  
})

