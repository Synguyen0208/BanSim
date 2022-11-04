import {Dimensions, ImageSourcePropType} from 'react-native';
import {AppComponent} from '../components';
import Images from './Images';
import {Colors} from '.';

const {height, width} = Dimensions.get('window');
export const SCREEN_WIDTH = width < height ? width : height;
export const SCREEN_HEIGHT = height > width ? height : width;

export const Categories: Category[] = [
  {
    icon: Images.ListPointers3X,
    label: 'Danh mục sim',
  },
  {
    icon: Images.Bell,
    label: 'Hòa mạng',
    wrapBy: 'GradientBackground',
    wrapByProps: {
      colors: [Colors.primaryLight, Colors.primary],
    },
  },
  {
    icon: Images.Cart,
    label: 'Đơn hàng',
    color: Colors.dimgray,
  },
  {
    icon: Images.Cart,
    label: 'Gói cước',
    wrapBy: 'GradientBackground',
    wrapByProps: {
      colors: [Colors.lightGreen, Colors.teal],
    },
  },
  {
    icon: Images.ListPointers3X,
    label: 'Tạo ảnh sim',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Quản lý trả góp',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Giới thiệu',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Nâng cấp VIP',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Bói sim phong thủy',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Tìm sim phong thủy',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Bói STK ngân hàng',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Quản lý CTV',
  },
  {
    icon: Images.ListPointers3X,
    label: 'Tìm số hợp mệnh',
  },
];

// type
export interface Category {
  icon: ImageSourcePropType;
  label: string;
  wrapBy?: AppComponent;
  wrapByProps?: any;
  color?: string;
}
