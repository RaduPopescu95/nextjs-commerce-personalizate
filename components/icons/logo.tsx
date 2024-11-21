import Image from 'next/image';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image
    width={300}
    height={400}
    src="/design-and-gift.png"
    alt="image"
    
  />
  );
}
