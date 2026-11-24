import { Link } from 'react-router-dom';
import { CircleArrow, MonoTag } from '../home/ui';
import { cn } from '../../lib/cn';
import { postPath, type BlogPost } from './blogData';
import { PostCover } from './PostCover';
import { PostMeta } from './PostMeta';

export const PostCard = ({ post, className }: { post: BlogPost; className?: string }) => (
  <article
    className={cn(
      'group relative flex flex-col overflow-hidden rounded-2xl border border-vesk-border bg-vesk-dark-2 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-vesk-border-warm hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.75)]',
      className,
    )}
  >
    <PostCover post={post} />
    <div className="flex flex-1 flex-col p-6">
      <MonoTag className="mb-3 text-[11px]">{post.category}</MonoTag>
      <h3 className="font-display text-[22px] leading-[1.2] font-normal text-balance text-vesk-surface">
        {/* O link cobre o card inteiro (::after), sem aninhar elementos interativos. */}
        <Link
          to={postPath(post)}
          className="no-underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-vesk-orange"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-vesk-muted">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <PostMeta post={post} />
        <CircleArrow />
      </div>
    </div>
  </article>
);
