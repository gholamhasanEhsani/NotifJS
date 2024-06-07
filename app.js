function fire() {
    console.log("X");
    const te = document.querySelector('#te');
    const co = document.querySelector('#co');
    const ti = document.querySelector('#ti');
        let t = te.value;
        let c = co.value;
        let i = ti.value;
        Notif(t, c, i);
}