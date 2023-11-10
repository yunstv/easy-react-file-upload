import * as React from 'react';
import type { ImageListProps } from './interface';
import { ImagePreview } from '../index';

export const List: React.FC<ImageListProps> = ({ list }) => {
  console.log('list:', list);
  const [uri, setUri] = React.useState('');
  const cacheImage = React.useMemo(() => {
    const uris = list.map(file => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file)
      });
    });
    return uris;
  }, [list]);
  const handleClick = (uri: string) => {
    setUri(uri);
  };
  React.useEffect(() => {
    return () => {
      list.forEach(file => {
        file.preview && URL.revokeObjectURL(file.preview);
      });
    };
  }, []);
  return (
    <div>
      <>
        {Array.from(cacheImage, (file, index) => (
          <div key={index} onClick={() => handleClick(file.preview)}>
            <p>{file.preview}</p>
            <p>
              {file.name}/{file.type}
            </p>
          </div>
        ))}
      </>
      <ImagePreview instance={1} uri={uri} />
    </div>
  );
};

export default List;
