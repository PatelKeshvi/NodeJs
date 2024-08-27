const { Router } = require("express")
const { Get, CreateBlog, Upadte, Delete, findBlogByUserId, findById } = require("../controller/Blog.controller")


const BlogRoute = Router()

BlogRoute.get("/", findById)
BlogRoute.get("/", Get)
BlogRoute.post("/", CreateBlog)
BlogRoute.patch("/:id", Upadte)
BlogRoute.delete("/:id", Delete)
BlogRoute.get("/user/:userId", findBlogByUserId)

module.exports = BlogRoute