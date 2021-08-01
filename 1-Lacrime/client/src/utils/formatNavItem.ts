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
