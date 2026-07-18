import figma from '@figma/code-connect';
import { Input } from '@/components/ui/input';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Input,
  'https://www.figma.com/design/G36ynx8X2JuP6hCDz2Z8Bz/Untitled?node-id=1-11787',
  {
    props: {
      state: figma.enum('state', { Default: 'default', FocusVisible: 'focus-visible', Disabled: 'disabled', Invalid: 'invalid' }),
      leadingIcon: figma.boolean('Leading icon'),
      placeholder: figma.string('placeholder'),
      readOnly: figma.boolean('readOnly'),
    },
    example: (props) => <Input {...props} />,
  },
);
