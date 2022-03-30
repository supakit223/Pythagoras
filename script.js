function showPythagoras() { 
    const amount = document.getElementById("amount").value    
    // document.getElementById("show").innerHTML = amount  
    let array = []
    let show = ""
    let count = 0
    for (let i = 1; i <= amount; i++) {
        for (let j = 1; j <= amount; j++) {
            for (let k = 1; k <= amount; k++) {
                array[0] = i
                array[1] = j
                array[2] = k           
                if (k*k == i*i + j*j && i <= j && euclid_gcd_many(array) == 1) {
                    count++
                    show = show + `ชุดที่ ${count}  คือ ${i} , ${j} , ${k} <br>`                    
                }
            }
        }
    }
    count = `จำนวนชุดที่คำนวณได้คือ ${count} ชุด`
    document.getElementById("show1").innerHTML = count
    document.getElementById("show2").innerHTML = show
}
// function หา ห.ร.ม.
function euclid_gcd_two(number1,number2) {
    let ses = number1%number2
    if (ses > 0) {
        return euclid_gcd_two(number2,ses)
    }else{
        return number2        
    }
}
function euclid_gcd_many(array) { 
    let i = 2        
    let length = array.length  
    let gcd = euclid_gcd_two(array[i-2],array[i-1])          
    while (i < length) {        
        gcd = euclid_gcd_two(gcd,array[i])
        i++            
    }
    return gcd
}