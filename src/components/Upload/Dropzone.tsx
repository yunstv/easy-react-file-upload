import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { prefix } from '../../utils';
import { ImagePreview } from '../index';
import type { AnyObject } from '../../types';
import type {
  DropzoneProps,
  RefDropzone,
  FileType,
  FileAccepts
} from './interface';

const Accepts: FileAccepts = {
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
};
const defaultFileType: FileType = 'image';

export const Dropzone = <RecordType extends AnyObject = AnyObject>(
  props: DropzoneProps<RecordType>,
  ref: React.Ref<HTMLDivElement>
) => {
  const { fileType: _fileType, _renderTimeRef } = props;
  const fileType: FileType = !_fileType ? defaultFileType : _fileType;
  const accept = Accepts[`${fileType}/*`] as FileAccepts;

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: accept,
    onDrop: files => console.log(files)
  });
  console.log('_renderTimeRef:', _renderTimeRef, 'fileType:', fileType);
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
