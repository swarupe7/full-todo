const express=require("express");
const router=express.Router();

const {getTodos,createTodo,toggleTodo,deleteTodo}=require("../controllers/todoController");

router.get("/todos",getTodos);
router.post("/todos/add",createTodo);
router.delete("/todos/delete/:id",deleteTodo);
router.get("/todos/toggle/:id",toggleTodo);

module.exports=router;
