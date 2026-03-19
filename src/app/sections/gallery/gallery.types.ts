export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryCard = {
  key: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  large?: boolean;
  images: GalleryImage[];
};
