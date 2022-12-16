/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import * as newskit from 'newskit';
import {useDrop} from 'react-dnd';
import _ from 'lodash';
import composeRefs from '@seznam/compose-react-refs';

const {GridLayout, GridLayoutItem, Menu, Block, Scroll, styled} = newskit;

const componetns = {
  ...newskit,
};

componetns['GridLayout'] = styled(GridLayout)`
  outline: 2px dotted #ccc;
`;
componetns['GridLayoutItem'] = styled(GridLayoutItem)`
  min-height: 10px;

  outline: 2px dotted pink;
`;
componetns['Block'] = styled(Block)`
  min-height: 10px;

  outline: 2px dotted blue;
`;
componetns['Menu'] = styled(Menu)`
  min-height: 10px;

  outline: 2px dotted violet;
`;
componetns['Scroll'] = styled(Scroll)`
  min-height: 10px;
  outline: 2px dotted orange;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

const defaultProps = {
  Button: {
    children: 'Button',
  },
  Flag: {
    children: 'Flag',
  },
  Label: {
    children: 'Label',
  },
  Image: {
    src: 'https://picsum.photos/120/120',
  },
  TextBlock: {
    children: 'TextBlock',
  },
  Paragraph: {
    children: 'Paragraph',
  },
  Headline: {
    children: 'Headline',
  },
  TitleBar: {
    children: 'TitleBar',
  },
  Tag: {
    children: 'Tag',
  },
  GridLayout: {
    overrides: {
      minHeight: '42px',
    },
  },
  Block: {},
  Scroll: {},
  Menu: {},
  MenuItem: {
    children: 'Menu Label',
  },
};

let uniqID = 1;
const getId = () => ++uniqID;

const withChildrenComponents = [
  'Block',
  'GridLayout',
  'GridLayoutItem',
  'Menu',
  'Scroll',
  'Tabs',
];

export const MainEditor = ({onAdd, onSelected, onMove, data, tree}) => {
  const {drop} = useDropComponent(item => {
    console.log('Drop to main');
    onAdd({...item, id: getId(), props: defaultProps[item.component] || {}});
  });

  return (
    <Main ref={drop}>{mapItems({data, onSelected, items: tree, onAdd})}</Main>
  );
};

const mapItems = ({data, onSelected, items, onAdd}) => {
  if (!items) {
    return null;
  }
  return items.map(({id, children}) => {
    const item = data[id];

    if (withChildrenComponents.includes(item.component)) {
      return (
        <ComponentPreviewWithChildren
          {...item}
          children={children}
          onSelected={onSelected}
          onAdd={onAdd}
          data={data}
        />
      );
    }

    return <ComponentPreview onAdd={onAdd} {...item} onSelected={onSelected} />;
  });
};

const ComponentPreview = ({component, props, onSelected, id}) => {
  const Component = componetns[component];

  const onClickHandler = React.useCallback(
    e => {
      e.stopPropagation();
      // send event to edit component prop
      onSelected(id);
    },
    [id, onSelected],
  );

  const ref = useInteraction({event: 'click', handler: onClickHandler});

  return <Component {...props} ref={ref} />;
};

const ComponentPreviewWithChildren = ({
  component,
  props,
  onSelected,
  id,
  data,
  children,
  onAdd,
}) => {
  const {drop} = useDropComponent(item => {
    console.log('Drop to parent');
    onAdd({
      ...item,
      id: getId(),
      parentID: id,
      props: defaultProps[item.component] || {},
    });
  });

  const onClickHandler = React.useCallback(
    e => {
      e.stopPropagation();
      // send event to edit component prop
      onSelected(id);
    },
    [id, onSelected],
  );

  const ref = useInteraction({
    event: 'click',
    handler: onClickHandler,
  });

  const Component = componetns[component];

  const elementChildren = mapItems({data, onSelected, items: children, onAdd});

  return (
    <Component {...props} ref={composeRefs(drop, ref)}>
      {elementChildren}
    </Component>
  );
};

const useInteraction = ({event, handler}) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(event, handler);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener(event, handler);
      }
    };
  }, [ref, event, handler]);

  return ref;
};

const useDropComponent = onDrop => {
  const [nonsense, drop] = useDrop(() => ({
    accept: 'component',
    collect: monitor => ({
      isOver: monitor.isOver({shallow: true}) && monitor.canDrop(),
    }),
    drop: (item, monitor) => {
      if (!monitor.isOver()) {
        return;
      }
      onDrop(item);
    },
  }));

  return {drop};
};
