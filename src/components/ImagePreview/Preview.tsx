import * as React from 'react';
import type { PreviewProps } from './interface';
import ImageList from './ImageList';

export const Preview = (
  props: PreviewProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div ref={ref}>
      <img src={props.uri} title={props.uri} />
    </div>
  );
};

interface ForwardPreviewRef extends PreviewProps {
  instance: any;
}

const ForwardPreview = React.forwardRef(
  Preview
) as unknown as React.FC<ForwardPreviewRef> & {
  ImageList: typeof ImageList;
};

ForwardPreview.ImageList = ImageList;

export default ForwardPreview;
