import { path } from '.';
import axios from 'axios';
import { Post } from './type';

type FetchListResponse = Post[];

class PostApi {
  public async fetchList(): Promise<FetchListResponse> {
    const res = await axios.get(path());

    return res.data.posts;
  }

  public async fetchById() {}

  public async update() {}

  public async delete() {}
}

export const postApi = new PostApi();
