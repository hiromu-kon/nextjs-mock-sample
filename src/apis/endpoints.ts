export const BASE_URL = 'http://localhost:3000';

export namespace ApiEndpoint {
  /**
   * 投稿関連
   */
  export namespace Post {
    /**
     * localhost:3000/posts
     *
     * GET　投稿一覧取得API
     *
     * POST 投稿作成API
     */
    export const posts = `${BASE_URL}/posts`;

    /**
     * localhost:3000/posts/${postId}
     *
     * GET 投稿詳細取得API
     *
     * PUT 投稿編集API
     *
     * DELETE 投稿削除API
     */
    export function post(postId: string) {
      return `${BASE_URL}/post/${postId}`;
    }
  }

  export namespace Category {
    export const findList = `${BASE_URL}/categories`;
  }
}
