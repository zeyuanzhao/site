export function ViolinCard({
  src,
  title,
  className,
}: {
  src: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className="flex w-full flex-col-reverse items-start md:flex-row">
      <div
        className={`flex-shrink-0 ${className} overflow-hidden rounded-lg shadow-2xl shadow-white/10`}
      >
        <iframe
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="object-fit h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="px-0 pb-2 md:px-4 md:pt-2 md:pb-0">
        <p className="text-xl font-bold">{title}</p>
      </div>
    </div>
  );
}
