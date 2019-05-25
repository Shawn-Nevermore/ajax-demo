myButton.addEventListener("click", (e) => {
    $.ajax({
        url: '/xxx',
        method: 'post',
        body: 'a=1&b=2',
        success: (responseText) => {
            console.log('success')
            console.log(responseText)
        },
        fail: (request) => {
            console.log('fail')
            console.log(request.status)
        }
    })
})

window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    return nodes
}

window.jQuery.ajax = function ({ url, method, body, success, fail }) {

    let request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                fail.call(undefined, request)
            }
        }
    }
    request.send()
}

window.$ = window.jQuery