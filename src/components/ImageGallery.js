import ImageGalleryItem from 'components/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <ul className="gallery">
      {hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ul>
  );
};
