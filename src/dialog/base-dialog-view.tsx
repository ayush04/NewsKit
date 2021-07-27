import React, {useRef} from 'react';
import {BaseDialogViewProps} from './types';
import {
  StyledDialogPanel,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogHeaderContent,
  StyledCloseButtonContainer,
  StyledFillSpaceCloseButton,
} from './styled';
import {Stack} from '../stack';
import {IconButton} from '../icon-button';
import {IconFilledClose} from '../icons';
import {ButtonSize} from '../button';
import {useResizeObserver} from '../utils/hooks/use-resize-observer';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {BreakpointKeys, useTheme} from '../theme';

/* istanbul ignore next */
const centerCloseButton = (top: number) => ({
  top: top / 2,
  transform: top !== 0 ? `translateY(-50%)` : undefined,
});

export const BaseDialogView: React.FC<BaseDialogViewProps> = ({
  handleCloseButtonClick,
  className,
  path,

  overrides = {},
  placement = 'left',
  header,
  ariaDescribedby,
  ariaLabelledby,
  children,
  ...props
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [, headerHeight] = useResizeObserver(headerRef);

  const theme = useTheme();
  const closeButtonOverrides: typeof overrides['closeButton'] = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.drawer.closeButton,
      filterOutFalsyProperties(overrides.closeButton),
    ),
  };

  return (
    <StyledDialogPanel
      className={className}
      role="dialog"
      aria-modal="true"
      aria-label="dialog"
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      overrides={overrides}
      path={path}
      {...props}
    >
      <StyledDialogHeader overrides={overrides} ref={headerRef} path={path}>
        <Stack flow="horizontal-center" flowReverse={placement === 'left'}>
          {header && (
            <StyledDialogHeaderContent path={path}>
              {header}
            </StyledDialogHeaderContent>
          )}
          <StyledFillSpaceCloseButton
            path={path}
            overrides={overrides}
            placement={placement}
          />
        </Stack>
      </StyledDialogHeader>
      <StyledDialogContent data-testid="dialog-content" path={path}>
        {children}
      </StyledDialogContent>
      <StyledCloseButtonContainer
        path={path}
        placement={placement}
        overrides={overrides}
        style={{
          ...centerCloseButton(headerHeight),
        }}
        // Move props directly to IconButton when PPDSC-1449 is fixed
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseButtonClick}
          overrides={closeButtonOverrides}
          size={ButtonSize.Medium}
        >
          <IconFilledClose />
        </IconButton>
      </StyledCloseButtonContainer>
    </StyledDialogPanel>
  );
};