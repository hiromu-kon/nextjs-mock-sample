import { MockedRequest, ResponseResolver, rest, restContext } from 'msw';
import { path } from '.';
import type { Post } from './type';

export const postFactory = (id: number) => ({
  id: `${id}`,
  title: `Lorem Ipsum ${id}`,
  author: 'hiromunono',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper mi imperdiet neque porta iaculis. 

  Nulla fermentum, mi in bibendum interdum, est sapien mattis est, tempus pharetra enim orci et magna. 

  Praesent porta finibus porttitor. Curabitur pharetra nibh quis orci varius, ac finibus tortor vulputate. 

	Integer sit amet magna ex. Vivamus sed lorem rutrum, gravida ipsum at, pulvinar dui. 

  Nam non augue vehicula, sodales metus et, congue augue. Sed vel tellus cursus, aliquam justo eget, egestas lacus. `,
  published: true,
  publishedAt: '2022-06-23T13:30:07.942Z',
});

export const postsFactory = (length: number): Post[] =>
  Array.from({ length }).map((_, id) => postFactory(id));

export const postsFixture = { posts: postsFactory(10) };

export const getPostsMock: ResponseResolver<MockedRequest, typeof restContext> = async (
  _,
  res,
  ctx
) => {
  return res(ctx.status(200), ctx.json(postsFixture));
};

export const createPostMock: ResponseResolver<MockedRequest, typeof restContext> = async (
  req,
  res,
  ctx
) => {
  // const token = await jwt.sign({ uid: 1 }, JWT_SERCRET_KEY, { expiresIn: '1h' });

  return res(
    ctx.status(200),
    // ctx.cookie(COOKIE_NAME, token, {
    //   httpOnly: true,
    //   path: '/',
    // }),
    ctx.json(postFactory(0))
  );
};

export const defaultPostsHandlers = [
  rest.get(path(), getPostsMock),
  rest.post(path(), createPostMock),
];
