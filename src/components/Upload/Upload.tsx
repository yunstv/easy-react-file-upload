import * as React from 'react';
import type { AnyObject } from '../../types';
import type { RefUpload, UploadProps } from './interface';
import { Dropzone as ForwardDropzone } from './index';

// import ImageList from './ImageList';

export const Upload = <RecordType extends AnyObject = AnyObject>(
  props: UploadProps<RecordType>,
  ref: React.Ref<HTMLDivElement>
) => {
  const renderTimesRef = React.useRef<number>(0);
  renderTimesRef.current += 1;
  return (
    <ForwardDropzone<RecordType>
      {...props}
      ref={ref}
      _renderTimeRef={renderTimesRef.current}
    />
  );
};

export const ForwardUpload = React.forwardRef(Upload) as unknown as RefUpload;

export default ForwardUpload;
