
        // const result = document.getElementById('results')
        // const submit = document.querySelector('.submit')
        
        // function handleClick (e) {
            //     result.append(e.target.value)
            //     console.log(e)
            // }
            
            // submit.addEventListener('click', handleClick)
            // new URLSearchParams(window.location.search).forEach((value, name) => {
                //     let myPost = document.createElement('p')
                //     myPost.textContent = value
                //     result.append(myPost)
                
                // })
                
        const result = document.getElementById('form')
        const formElement = document.querySelector('#form')
        let allPost = []

        
        formElement.addEventListener('submit', (e) => {
            e.preventDefault()

            new FormData(formElement)
        })

        function handlePost (e) {

            let data = e.formData
            for (let value of data.values()) {
                let myPost = document.createElement('li')
                    myPost.textContent = value
                    
                    allPost.push(myPost)
            }
            // new post will be at the top.
            allPost.reverse()

            for(let i = 0; i < allPost.length; i++) {
                result.appendChild(allPost[i])
                result.reset()
            }
        }

        formElement.addEventListener('formdata', handlePost);

