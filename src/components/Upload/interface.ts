import type {
  FC,
  HTMLAttributes,
  MutableRefObject,
  PropsWithChildren,
  Ref
} from 'react';
import type { DropzoneProps as SourceDropzoneProps } from 'react-dropzone';
import type { AnyObject } from '../../types';

export interface UploadBasic<RecordType = unknown>
  extends Omit<SourceDropzoneProps, 'children'> {
  sourceRecordType?: RecordType;
}

export type ImageType =
  | '.jpeg'
  | '.png'
  | '.bmp'
  | 'svg+xml'
  | 'tiff'
  | 'webp'
  | 'x-icon';

export type FileTypeEnum = {
  text: [];
  image: ImageType[];
  video: [];
  audio: [];
};
export type FileType = keyof FileTypeEnum;
export type AcceptsKind = '/*';
export type FileTypeKind<Kind extends string = '/*'> = `${FileType}${Kind}`;

export type FileAcceptsGetters<Type> = {
  [Property in keyof Type as `${Uncapitalize<
    string & Property
  >}/*`]+?: Type[Property];
};

export type FileAccepts = FileAcceptsGetters<FileTypeEnum>;

export interface UploadProps<RecordType = unknown>
  extends UploadBasic<RecordType> {
  uri?: string | File | null;
  fileType?: FileType | '';
}

export type RefUpload = <RecordType extends AnyObject = AnyObject>(
  props: UploadProps<RecordType>,
  ref: Ref<HTMLDivElement>
) => React.ReactElement;

export interface DropzoneProps<RecordType = unknown>
  extends UploadProps<RecordType> {
  _renderTimeRef: number;
}

export type RefDropzone = <RecordType extends AnyObject = AnyObject>(
  props: PropsWithChildren<DropzoneProps<RecordType>> & {
    ref: Ref<HTMLDivElement>;
  },
  ref: Ref<HTMLDivElement>
) => React.ReactElement;
