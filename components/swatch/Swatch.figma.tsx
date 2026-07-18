import figma from '@figma/code-connect';
import { Swatch } from '@/components/ui/swatch';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Swatch,
  'https://www.figma.com/design/UlSZwfPtQcbBxam3nrlUey/Untitled?node-id=1-569',
  {
    props: {
      size: figma.enum('size', { Sm: 'sm', Lg: 'lg' }),
    },
    example: (props) => <Swatch {...props} />,
  },
);
