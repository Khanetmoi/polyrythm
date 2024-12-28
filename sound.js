const audioCtx = new (window.AudioContext|| window.webkitAudioContext)();

function playSound (frequency = 400, duration = 1){
    const osc = audioCtx.createOscillator();
    const enveloppe = audioCtx.createGain()
    osc.connect(enveloppe);
    enveloppe.connect(audioCtx.destination);

    enveloppe.gain.setValueAtTime(0, audioCtx.currentTime)
    enveloppe.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05)
    enveloppe.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration)

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)
    osc.start();
    osc.stop(audioCtx.currentTime + duration)
}