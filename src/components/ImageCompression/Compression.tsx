import * as React from 'react';
import type { AnyObject } from '../../types';
import type { PreviewProps } from './interface';

export const Preview = (
  props: PreviewProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div>
      <>1</>
    </div>
  );
};

interface ForwardPreviewRef extends PreviewProps {
  instance: any;
}

export default Preview;
