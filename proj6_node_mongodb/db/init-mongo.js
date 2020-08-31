db.createUser(
    {
        user: "username",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "db"
            }
        ]
    }
)
db.articles.insert({
    author:"a", title:"t", content:"c"
})