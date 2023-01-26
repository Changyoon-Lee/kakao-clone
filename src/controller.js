import client from "./libs/client";

export const getLogin = (req, res) => res.render("login", { pageType: "login" })
export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const isUser = await client.user.findUnique({
        where: { username, password }
    })
    if (isUser) {
        return redirect("/friends");
    } else {
        return res.redirect("/");
    }
}
export const friends = (req, res) => res.render("friends", { title: "friends" })
export const chats = (req, res) => res.render("chats", { title: "chats" })
export const chatroom = (req, res) => res.render("chatroom", { title: req.params.id, pageType: "chatroom" })
export const find = (req, res) => res.sendFile(__dirname + "/public/find.html")
export const more = (req, res) => res.sendFile(__dirname + "/public/more.html")
export const settings = (req, res) => res.sendFile(__dirname + "/public/settings.html")
export const getSignUp = (req, res) => res.render("signup", { pageType: "login" })
export const postSignUp = async (req, res) => {
    const isUser = await client.user.findUnique({
        where: {
            username: req.body.username
        }
    })
    console.log(addUser);

    if (!isUser) {
        const newUser = await client.user.create({
            data: req.body
        })
        return res.redirect("/");
    }
    return res.end();
}