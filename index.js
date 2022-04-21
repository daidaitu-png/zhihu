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
	ctx.body = "这是用户列表";
});

router.post("/users", (ctx) => {
	ctx.body = "这是创建用户列表";
});

router.get("/users/:id",auth, (ctx) => {
	ctx.body = `这是用户${ctx.params.id}dde`;
});

usersRouter.get("/zs/12", (ctx) => {
	ctx.body = `这是用户zs/12`;
});

app.use(router.routes());
app.use(usersRouter.routes());

app.listen(3000);
