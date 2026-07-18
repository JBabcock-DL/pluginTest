import figma from '@figma/code-connect';
import { Icons } from '@/components/ui/icons';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Icons,
  'https://www.figma.com/design/M3vtjnaNG0XPYvb3Y9LJRH/Untitled?node-id=1-617',
  {
    props: {
      icon: figma.enum('icon', { Variable: 'variable', Palette: 'palette', Squircle: 'squircle', Dl: 'dl', LogoMaterial: 'logo-material', LogoApple: 'logo-apple', LogoWeb: 'logo-web' }),
    },
    example: (props) => <Icons {...props} />,
  },
);
