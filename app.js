console.log("X");
const te = document.querySelector('#te');
const co = document.querySelector('#co');
const ti = document.querySelector('#ti');
const code = document.querySelector('#code');
function fire() {
    let t = te.value;
    let c = co.value;
    let i = ti.value;
    if (c == "primary" && i == 3){
        Notif(t);
        code.innerText = `Notif("${t}");`
    } else if (c != "primary" && i == 3){
        Notif(t, c);
        code.innerText = `Notif("${t}", "${c}");`
    } else {
        Notif(t, c, i);
        code.innerText = `Notif("${t}", "${c}", ${i});`
    }
}
function copy(){
    navigator.clipboard.writeText(code.innerText);
    Notif('Text Copied!', 'success');
}