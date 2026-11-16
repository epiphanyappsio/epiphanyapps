import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const AVATARS = [
  { src: avatar1, alt: "Maya R., product designer" },
  { src: avatar2, alt: "Andre K., founder" },
  { src: avatar3, alt: "Lin C., content creator" },
  { src: avatar4, alt: "David S., agency owner" },
];

export const SocialProof = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-center">
        {AVATARS.map((a, i) => (
          <img
            key={a.alt}
            src={a.src}
            alt={a.alt}
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-primary/50 bg-background"
            style={{ marginLeft: i === 0 ? 0 : "-0.75rem", zIndex: AVATARS.length - i }}
          />
        ))}
        <span className="ml-2 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/20 border border-primary/40 text-[11px] font-semibold text-foreground">
          +1k
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        Join <span className="text-foreground font-semibold">thousands of creators and businesses</span> on the list
      </p>
    </div>
  );
};
