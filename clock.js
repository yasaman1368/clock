function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minuets = date.getMinutes();
    let seconds = date.getSeconds();
    let p = " AM";
    if (hour > 12) {
      (hour = hour - 12), (p = " PM");
    }
    let h = hour.toString().padStart(2, "0");
    let m = minuets.toString().padStart(2, "0");
    let s = seconds.toString().padStart(2, "0");

    demo.innerHTML = h + ":" + m + ":" + s + p;

    setTimeout(clock, 1000);
  }
  clock();