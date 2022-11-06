import { z } from 'zod';

export const PostInputSchema = z.object({
  title: z.string().min(1, 'タイトルを入力してください'),
  author: z.string().min(1, '著者を入力してください'),
  body: z.string().optional(), // { body?: string | undefined };
  published: z.boolean(),
  publishedAt: z.string(),
});

// type PostInputSchema = {
//   body?: string | undefined;
//   title: string;
//   author: string;
//   published: boolean;
//   publishedAt: string;
// }
type PostInputSchema = z.infer<typeof PostInputSchema>;
