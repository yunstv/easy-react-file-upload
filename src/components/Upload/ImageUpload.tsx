import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { prefix } from '../../utils';
import { ImagePreview } from '../index';
import type { AnyObject } from '../../types';
import type { DropzoneProps, RefDropzone } from './interface';
// import ImageList from './ImageList';

export const Dropzone = <RecordType extends AnyObject = AnyObject>(
  props: DropzoneProps<RecordType>,
  ref: React.Ref<HTMLDivElement>
) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: {
      'image/*': [
        '.jpeg',
        '.png',
        '.bmp',
        '.bmp',
        'svg+xml',
        'tiff',
        'webp',
        'x-icon'
      ]
    },
    onDrop: files => console.log(files)
  });

  return (
    <div className="container">
      <div {...getRootProps({ className: prefix('dropzone') })}>
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && <p>Drop some files here ...</p>}
      </div>
      <ImagePreview instance={1} uri={''} />
      <ImagePreview.ImageList list={[]} />
    </div>
  );
};
const ForwardDropzone = React.forwardRef(Dropzone) as unknown as RefDropzone;

export default ForwardDropzone;
