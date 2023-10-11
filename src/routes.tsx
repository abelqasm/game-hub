import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import GameDetailPage from './pages/GameDetailPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'Games:id',
				element: <GameDetailPage />,
			},
		],
	},
]);

export default router;
