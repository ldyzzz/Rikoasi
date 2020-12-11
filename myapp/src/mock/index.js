import Mock from "mockjs"
Mock.mock("/getData",()=>{
    return Mock.mock({
        "list|20":[{
            "title":"@cname",
            "img":"@image(100x100,@color)",
            "content":"@cword(5,10)"
        }]
    })
})