interface IconProps {
  size?: number;
  className?: string;
}

export const SearchIcon = ({ size = 18, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const ChevronDownIcon = ({ size = 12, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const ArrowRightIcon = ({ size = 16, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ArrowDownIcon = ({ size = 22, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

export const PlayIcon = ({ size = 14, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

export const FacebookIcon = ({ size = 16, className }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  </svg>
);

export const TwitterIcon = ({ size = 16, className }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.9c-.7.32-1.5.54-2.3.64a4.05 4.05 0 0 0 1.77-2.24 8.1 8.1 0 0 1-2.56.98 4.02 4.02 0 0 0-6.86 3.67A11.4 11.4 0 0 1 3.6 4.7a4.02 4.02 0 0 0 1.25 5.37c-.66-.02-1.28-.2-1.82-.5v.05a4.02 4.02 0 0 0 3.23 3.95c-.6.16-1.24.19-1.87.07a4.03 4.03 0 0 0 3.76 2.8A8.08 8.08 0 0 1 2 18.57a11.4 11.4 0 0 0 6.17 1.8c7.4 0 11.45-6.13 11.45-11.45l-.01-.52A8.2 8.2 0 0 0 22 5.9Z" />
  </svg>
);

export const InstagramIcon = ({ size = 16, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const PinterestIcon = ({ size = 16, className }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-3.65 19.31c-.05-.83-.09-2.1.02-3 .1-.81.65-5.17.65-5.17s-.17-.33-.17-.83c0-.78.45-1.36 1.02-1.36.48 0 .71.36.71.8 0 .49-.31 1.21-.47 1.89-.13.56.29 1.02.85 1.02 1.02 0 1.8-1.08 1.8-2.63 0-1.38-.99-2.34-2.4-2.34-1.64 0-2.6 1.22-2.6 2.49 0 .49.19 1.02.43 1.31a.17.17 0 0 1 .04.17c-.05.18-.15.56-.17.64-.03.11-.09.13-.2.08-.79-.37-1.28-1.51-1.28-2.43 0-1.98 1.44-3.8 4.15-3.8 2.18 0 3.87 1.55 3.87 3.62 0 2.16-1.36 3.9-3.25 3.9-.63 0-1.23-.33-1.43-.72l-.39 1.48c-.14.55-.52 1.23-.78 1.65A10 10 0 1 0 12 2Z" />
  </svg>
);
  export const HeartIcon = ({ size = 18, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-7.5-4.6-10-9.3C.5 8.3 2 4.8 5.6 4.1c2-.4 4 .6 5 2.3.9-1.7 3-2.7 5-2.3 3.6.7 5.1 4.2 3.6 7.6-2.5 4.7-10 9.3-10 9.3z" />
  </svg>
);

export const BagIcon = ({ size = 18, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 7h12l1 14H5L6 7z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);

export const YoutubeIcon = ({ size = 16, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <polygon points="10 9 16 12 10 15" fill="currentColor" stroke="none" />
  </svg>

);