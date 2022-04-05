import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('test.nj');
  }
  async login() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: '!!',
      msg: 'hello',
    };
    // ctx.
    ctx.cookies.set('name', '123', {
      // httpOnly: false,
      // signed: false,
      maxAge: 200 * 2000,
      // path: '/',
      // secure: false,
      // sameSite: 'none',
    });
    ctx.status = 200;

  }
}
