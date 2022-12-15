import { ApiEndpoint } from '../endpoints';
import useSWR from 'swr';
import { postApi } from './fetcher';

export const path = () => ApiEndpoint.Post.posts;

export const useFetchPosts = () => {
  return useSWR(path(), postApi.fetchList);
};

export const useMutatePosts = () => {};
