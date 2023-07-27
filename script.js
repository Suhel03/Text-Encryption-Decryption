var clutter = ""
function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
       // for getting input
       var input =  document.getElementById("txtmsg").value
       console.log(input)

       //for getting password
       var pass = document.getElementById("password").value
       console.log(pass)
       
       //Spliting the input
       var str = input.split("")
       
       //converting input to Emojis
       str.forEach(element => {
        clutter += `&#128${(element.charCodeAt())} `
       });
        //console.log(clutter)
        
        // storing in a #result div
        document.querySelector("#result").innerHTML = clutter

        var data = []

        if(JSON.parse(localStorage.getItem('data1'))){
            data = JSON.parse(localStorage.getItem('data1'))
            console.log(data)
            data.push({"pass" : pass, "input": input, "clutter": clutter})
        }else{
            data = [{"pass" : pass, "input": input, "clutter": clutter}]
        }
        
        localStorage.setItem('data1', JSON.stringify(data))
    })
}
encryption()

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        var clutter2 = '';

        // getting Emoji message
        var input2 = document.querySelector("#emojimsg").value

        // getting final password
        var pass2 = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element =>{
            clutter2 += `&#${element.codePointAt(0)} `
        })
        console.log(clutter2)
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i
                console.log(i)
            }
        }
        if(found.clutter === clutter2){
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = "#eee"

            document.querySelector("#result").innerHTML = found.input
        }else{
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "red"
            document.querySelector("#result").innerHTML = "Wrong Password!"

        }
    })
}
decryption()


function clickingBtn() {

    document.querySelector("#decry-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#decry-btn").style.backgroundColor = "#333"
        document.querySelector("#encry-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "270deg"
        document.querySelector("#result").style.display = "none"
    })


    document.querySelector("#encry-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#encry-btn").style.backgroundColor = "#333"
        document.querySelector("#decry-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "90deg"
        document.querySelector("#result").style.display = "none"
    })    
    document.querySelector("button").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })
    // document.querySelector("#decrypt-btn").addEventListener("click", function(){
    //     document.querySelector("#result").style.display = "block"
    // })
}
clickingBtn()