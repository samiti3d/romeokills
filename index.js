var listLayout = document.querySelectorAll('[class*="generalPostLayout"]');
for(const item of listLayout) {
    var btnClick = item.firstChild.children[1].firstChild.children[0];
    btnClick.click();
    var menu = document.querySelector('[class*="postMenuLayout_menu_list"]');
    console.log(menu);
    var forMenu = menu.children;
    var count = 0;
    for(const item of forMenu) {
        if(count == 2) {
            item.firstChild.click();
            break;
        }
        count += 1;
    }
    var alertBtn = document.querySelector('[class*="confirmModal_button_confirm__"]');
    setTimeout( function () {
      alertBtn.click();
    }, 2000);
    break;
}
