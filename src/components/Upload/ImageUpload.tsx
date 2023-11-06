import * as React from 'react';
import type { AnyObject } from '../../types';
import type { DropzoneProps, RefDropzone } from './interface';

export const ImageUpload = <RecordType extends AnyObject = AnyObject>(
  props: DropzoneProps<RecordType>,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div className="container" ref={ref}>
      {props.fileType}
    </div>
  );
};
const ForwardImageUpload = React.forwardRef(
  ImageUpload
) as unknown as RefDropzone;

export default ForwardImageUpload;
