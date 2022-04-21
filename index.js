const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const usersRouter = new Router({ prefix: "/users" });

// auth中间件---->加一个安全层
const auth = async (ctx, next) => {
	if (ctx.url !== "/users") {
		ctx.throw(401);
	}
	await next;
};

router.get("/", (ctx) => {
	ctx.body = "这是主页";
});

router.get("/users", (ctx) => {
	ctx.body = [
		{
			name: "李磊",
		},
		{
			name: "韩梅梅",
		},
	];
});

usersRouter.post("/:id", (ctx) => {
	ctx.body = {
		name: "李磊",
	};
});

usersRouter.get("/:id", (ctx) => {
	ctx.body = {
		name: "李磊",
	};
});

usersRouter.put("/:id", (ctx) => {
	ctx.body = {
		name: "李磊2",
	};
});

usersRouter.delete("/:id", (ctx) => {
	// ctx.body = `这是删除用户${ctx.params.id}`;
	ctx.status = 204; // 删除成功，但是没内容
});

app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods()); // -->这一步让所有请求支持options请求

app.listen(3000);
