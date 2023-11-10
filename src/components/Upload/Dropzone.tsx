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

const maxLength = 2;

function NameLengthValidato(file: File) {
  if (file.name.length > maxLength) {
    return {
      code: 'name-too-large',
      message: `Name is larger than ${maxLength} characters`
    };
  }
  return null;
}

export const Dropzone = <RecordType extends AnyObject = AnyObject>(
  props: DropzoneProps<RecordType>,
  ref: React.Ref<HTMLDivElement>
) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const { fileType: _fileType, _renderTimeRef } = props;
  const fileType: FileType = !_fileType ? defaultFileType : _fileType;
  const acceptType = `${fileType}/*`;
  const accept = Accepts[acceptType as keyof FileAccepts] as FileAccepts;

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log('acceptedFiles:', acceptedFiles);
    setFiles(acceptedFiles as File[]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { [acceptType as string]: [] },
    onDrop: onDrop
    // validator: NameLengthValidato
  });
  return (
    <div className="container" ref={ref}>
      <div {...getRootProps({ className: prefix('dropzone') })}>
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && <p>Drop some files here ...</p>}
      </div>
      <ImagePreview.ImageList list={files} />
    </div>
  );
};
const ForwardDropzone = React.forwardRef(Dropzone) as unknown as RefDropzone;

export default ForwardDropzone;
