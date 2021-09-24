import React from 'react';
import {
  StructuredListCellProps,
  StructuredListItemProps,
  StructuredListProps,
} from './types';
import {StyledListWrapper, StyledWrapper} from './styled';
import {Divider} from '../divider';

export const StructuredListCell: React.FC<StructuredListCellProps> = ({
  children,
}) => (
  <>
    {React.Children.map(children, child => (
      <StyledWrapper>{child}</StyledWrapper>
    ))}
  </>
);

export const StructuredList: React.FC<StructuredListProps> = ({
  children,
  ariaLabel,
  divider,
  overrides = {},
  ...props
}) => {
  const structuredListChildren = React.Children.toArray(
    children,
  ) as React.ReactElement<StructuredListItemProps>[];
  return (
    <StyledListWrapper overrides={overrides} aria-label={ariaLabel} {...props}>
      {structuredListChildren.reduce(
        (acc: React.ReactElement[], listItem, index, array) => {
          acc.push(listItem);
          if (divider && index < array.length - 1) {
            acc.push(
              <Divider
                overrides={overrides.divider}
                key={`divider-${index || listItem.key}`}
              />,
            );
          }
          return acc;
        },
        [],
      )}
    </StyledListWrapper>
  );
};
