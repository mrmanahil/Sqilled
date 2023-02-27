import LayoutWithoutSidebar from '../components/layout/without-sidebar';
import Home from '../screens/home';
import Terms from '../screens/terms';
import Privacy from '../screens/privacy';
import Contact from '../screens/contact';
import PRICING from '../screens/pricing';
import Login from '../screens/login';
import Register from '../screens/register';
import EditProfile from '../screens/edit-profile';
import ViewProfile from '../screens/view-profile';
import SearchList from '../screens/search-list';
import SearchDetails from '../screens/search-details';
import MyBookings from '../screens/my-bookings/index';
import VideoChat from '../screens/videoChat/index';
import RecordVideo from '../screens/edit-profile/recordVideo';
import WriterAvailability from '../screens/my-bookings/writer-availability';
import MySubscribers from '../screens/my-subscribers/index';

export const publicRoutes = [
  {
    key: 'home',
    exact: true,
    path: '/',
    component: Home,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'pricing',
    exact: true,
    path: '/pricing',
    component: PRICING,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'login',
    exact: true,
    path: '/login',
    component: Login,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'register',
    exact: true,
    path: '/register',
    component: Register,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'MySubscribers',
    exact: true,
    path: '/my-subscribers',
    component: MySubscribers,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'EditProfile',
    exact: true,
    path: '/edit-profile',
    component: EditProfile,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'ViewProfile',
    exact: true,
    path: '/view-profile',
    component: ViewProfile,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'SearchList',
    exact: true,
    path: '/search',
    component: SearchList,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'SearchDetails',
    exact: true,
    path: '/search-details',
    component: SearchDetails,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'MyBookings',
    exact: true,
    path: '/my-bookings',
    component: MyBookings,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'VideoChat',
    exact: true,
    path: '/video-chat',
    component: VideoChat,
    layout: LayoutWithoutSidebar
  },
  {
    key: 'RecordVideo',
    exact: true,
    path: '/record-self-video-profile',
    component: RecordVideo,
    layout: LayoutWithoutSidebar
  },
  {
    key: 'WriterAvailability',
    exact: true,
    path: '/writer-availability',
    component: WriterAvailability,
    layout: LayoutWithoutSidebar
  },
  {
    key: 'terms',
    exact: true,
    path: '/terms',
    component: Terms,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'privacy',
    exact: true,
    path: '/privacy',
    component: Privacy,
    layout: LayoutWithoutSidebar,
  },
  {
    key: 'Contact',
    exact: true,
    path: '/contact',
    component: Contact,
    layout: LayoutWithoutSidebar,
  },
];
export const privateRoutes = [

];
