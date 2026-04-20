let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeat() {
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(60, audioCtx.currentTime);

    gain.gain.setValueAtTime(1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
}

// تشغيل النبض كل ثانية
setInterval(playBeat, 1000);

// حل مشكلة تشغيل الصوت (لازم تفاعل من المستخدم)
document.body.addEventListener("click", () => {
    audioCtx.resume();
});
function a(){
    document.getElementById("b").innerText =" انا اسف انا بقالي فترة بفكر في اللي حصل بينا، وبجد مضايق جدا من الوضع اللي وصلناله.\n يمكن كنت بهزر بزيادة ولو ده زعلك أو جرحك فأنا بعتذرلك من قلبي بجد أنا مكنتش أقصد أضايقك ولا أزعلك خالص"

    }
    function s(){
 document.getElementById("d").innerText =" إنتي بالنسبالي مش بس الباشمهندسة او المديرة إنتي حد غالي عليا قريبة  ومش حابب إن أي سوء تفاهم تبعدنا عن بعض بالشكل ده أنا مقدر مشاعرك \n وعارف إن يمكن اللي حصل كان تقيل عليكي وده حقك\n"
}
function h(){
 document.getElementById("c").innerText =" أنا نفسي نفتح صفحة جديدة ونتكلم بهدوء لأن وجوديك في حياتي مهم ومش عايز نخسر بعض عشان موقف ممكن يتحل بكلمتين"
 }
 function j(){
 document.getElementById("e").innerText ="لو  حابة نتكلم أنا موجود ي \n"
 }
  function k(){
   document.getElementById("f").innerText = "بجد وحشتيني وأتمنى نرجع زي الأول وأحسن كمان 🤍 "
  }
   function m(){
  document.getElementById("g").innerText = "بتوقيع mr.robot او ايزن او تيم شارك \n" ;

}
