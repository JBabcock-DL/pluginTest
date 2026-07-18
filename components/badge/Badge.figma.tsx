import figma from '@figma/code-connect';
import { Badge } from '@/components/ui/badge';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Badge,
  'https://www.figma.com/design/UlSZwfPtQcbBxam3nrlUey/Untitled?node-id=1-559',
  {
    props: {
      type: figma.enum('type', { Variable: 'variable', Syntax: 'syntax', Value: 'value', GroupAnnotation: 'group-annotation' }),
    },
    example: (props) => <Badge {...props} />,
  },
);
