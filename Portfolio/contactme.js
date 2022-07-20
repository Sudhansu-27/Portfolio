var form = document.getElementById('form')
form.addEventListener('submit',function(event)
{
    event.preventDefault()

    var Name = document.getElementById('Name').value 
    console.log(Name)

    var Email = document.getElementById('Email').value 
    console.log(Email)

    var Message = document.getElementById('Message').value 
    console.log(Message)
})