import { Clock } from 'lucide-react';
import { cn } from '../../lib/cn';
import { formatDate, readingTime, type BlogPost } from './blogData';

export const PostMeta = ({ post, className }: { post: BlogPost; className?: string }) => (
  <p className={cn('flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-vesk-muted', className)}>
    <time dateTime={post.date}>{formatDate(post.date)}</time>
    <span aria-hidden className="h-1 w-1 rounded-full bg-vesk-border" />
    <span className="inline-flex items-center gap-1.5">
      <Clock size={13} aria-hidden />
      {readingTime(post)} min de leitura
    </span>
  </p>
);
