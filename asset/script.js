function startNewGame() {

    const numberOfRound = 2
    let score1 = 0
    let score2 = 0
    let currentRound = 1

    while (currentRound <= numberOfRound) {
        const targetNumber = Math.floor(Math.random() * 3) + 1;
        
        //ambil input player 1
        const input1 = prompt('player 1 memasukan angka antara 1 dan 3')
        //ambil input player 2
        const input2 = prompt('player 2 memasukan angka antara 1 dan 3')

        if (input1 >= 1 && input1 <= 3 && input2 >= 1 && input2 <= 3) {

            alert(`angka yang dicari : ${targetNumber}`)

        if (targetNumber == input1) {

            score1++
            alert('jawaban player 1 benar')

        }  
        if (targetNumber == input2) {

            score2++
            alert('jawaban player 2 benar')
            
        }
        currentRound++ 

        } else {
            
            alert('angka yang diinput tidak relevan')

        }
    }

    //menghitung skor player 1 dan player 2
    alert(`skor player 1 = ${score1}
      skor player 2 = ${score2}`)

    if (score1 < score2) {

        alert('player 2 menang')

    } 
    
    else if(score2 < score1) {

        alert('player 1 menang')

    } 
    
    else {

        alert('seri')
        
    }
    
}

alert(`selamat datang di game tebak angka.
anda harus menebak angka diantara 1 dan 3 untuk memainkan game ini.
player yang memiliki skor paling banyak akan menang.
SELAMAT BERMAIN =)`)

startNewGame();

    do {
        startNewGame()
    } while (confirm('apakah ingin bermain lagi ?') == true);

    // if (replayOrNot == 1) {
    //     startNewGame();
    //     replayOrNot = prompt(`
    //     apakah ingin bermain lagi ?
    //     1. ya
    //     2. tidak`)
    // } else {
    //     alert('selamat, anda telah menyelesaikan game ini')
    // }

