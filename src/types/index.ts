import type { PropsWithChildren } from 'react';

export type Theme = 'light' | 'dark' | 'colored';

export type EasyUploadCallback = (e?: HTMLElement) => void;
export type EasyUploadEndStart = EasyUploadCallback;
export type EasyUploadEndEnd = EasyUploadCallback;

export type EasyUpload = (
  element: HTMLElement,
  callback: (element: HTMLElement, unobserve: EasyUploadEndEnd) => void
) => {
  start: EasyUploadEndStart;
  end: EasyUploadEndEnd;
};

export type EasyUploadImagePreviewProps = {
  className?: string;
  animation?: string;
} & PropsWithChildren;

export type AnyObject = Record<PropertyKey, any>;
