import { BaseItemField, ItemField } from '../defs/topnavbar';

interface UnformattedNavItem {
  name: string;
  children?: string[];
}

function formatNavItem(
  unformattedNavItem: Array<UnformattedNavItem>,
): (BaseItemField | ItemField)[] {
  return unformattedNavItem.map(({ name, children }) => {
    const rawFormatted = name.toLowerCase().split(' ').join('-');

    const formatted = {
      id: rawFormatted,
      text: name,
      slug: rawFormatted,
    };

    if (children && Array.isArray(children)) {
      const formattedChild = children.map((nameChild) => {
        const rawFormattedChild = nameChild.toLowerCase().split(' ').join('-');
        return {
          id: rawFormattedChild,
          text: nameChild,
          slug: rawFormattedChild,
        };
      });

      return { ...formatted, children: formattedChild };
    }

    return formatted;
  });
}

export default formatNavItem;

//

const buildNavItem = <X extends string, Y extends string[]>(name: X, children?: Y) => {
  const formatted = name.toLowerCase().split(' ').join('-');

  const build = {
    id: formatted,
    text: name,
    slug: formatted,
  };

  if (children && Array.isArray(children)) {
    const buildChild = children.map((childName) => {
      const formattedChild = childName.toLowerCase().split(' ').join('-');
      return {
        id: formattedChild,
        text: childName,
        slug: formattedChild,
      };
    });

    return { ...build, children: buildChild };
  }

  return build;
};

const topNavbarItems: Array<{ name: string; children?: Array<string> }> = [
  { name: 'Menu 1' },
  {
    name: 'Menu 2',
    children: ['Child 1.1', 'Child 1.2', 'Child 1.3'],
  },
  { name: 'Menu 3' },
  { name: 'Menu 4' },
  { name: 'Menu 5' },
];

const topNavbarItem = topNavbarItems.map((item) => {
  if (item.children) return buildNavItem(item.name, item.children);
  return buildNavItem(item.name);
});
