import SayHello from "@/components/home/SayHello";
import styles from '../styles/page.module.css'
import { Tags } from "@/components/home/Tags";
import PostList from "@/components/home/PostList";
import filteredBlogs from "@/utils/getMdxPosts";
import getTagsWithCounts from "@/utils/getMdxTags";
import { cookies } from 'next/headers';

export default function Home() {
  // 쿠키 초기화 및 'mode' 속성이 없는 경우 기본값 설정
  const cookie = cookies().get('mode') || { value: 'light' };

  // 함수 호출을 통한 tags 및 getBlogs 초기화
  const tags = getTagsWithCounts
  const getBlogs = filteredBlogs

  return (
    <div className={cookie.value === 'dark' ? styles.wrap_dark : styles.wrap}>
      <SayHello />
      <Tags tags={tags} mode={cookie} />
      <PostList getBlogs={getBlogs} mode={cookie} />
    </div>
  );
}
