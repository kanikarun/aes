import { Default } from './default';
import { BannerProps } from './interface';
import { Service } from './service';

export const Banner: React.FC<BannerProps> = props => {
  switch (props.variant) {
    case 'Service':
      return <Service {...props} />;
    case 'Default':
    default:
      return <Default {...props} />;
  }
};
