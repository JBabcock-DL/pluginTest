import figma from '@figma/code-connect';
import { Annotation } from '@/components/ui/annotation';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Annotation,
  'https://www.figma.com/design/G36ynx8X2JuP6hCDz2Z8Bz/Untitled?node-id=1-7652',
  {
    props: {
      kind: figma.enum('kind', { Padding: 'padding', Gap: 'gap' }),
    },
    example: (props) => <Annotation {...props} />,
  },
);
