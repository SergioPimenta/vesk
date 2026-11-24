import { cn } from '../../lib/cn';
import { postImage, type BlogPost } from './blogData';

/** Capa do artigo: foto da pasta `public/blog` com um véu grafite para combinar com o tema escuro. */
export const PostCover = ({
  post,
  className,
  priority = false,
}: {
  post: Pick<BlogPost, 'slug' | 'imageAlt' | 'category'>;
  className?: string;
  priority?: boolean;
}) => (
  <div className={cn('relative isolate aspect-[16/9] overflow-hidden bg-vesk-dark-3', className)}>
    <img
      src={postImage(post)}
      alt={post.imageAlt}
      width={1280}
      height={720}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
    />
    <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[rgb(15_17_19/0.55)] via-transparent to-[rgb(210_122_68/0.08)]" />
  </div>
);
