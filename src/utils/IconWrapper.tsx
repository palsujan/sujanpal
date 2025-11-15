import { ReactElement } from 'react';
import { IconType, IconBaseProps } from 'react-icons';

// This function correctly wraps react-icons to fix TypeScript errors
export const IconWrapper = (Icon: IconType, props: IconBaseProps = {}): ReactElement => {
  return Icon(props) as ReactElement;
} 