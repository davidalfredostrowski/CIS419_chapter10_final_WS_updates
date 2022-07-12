import React, {useState, useEffect }  from 'react';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import Bar from './components/bar';
import { useCurrentUserQuery } from './apollo/queries/currentUserQuery';
import LoginRegisterForm from './components/loginregister';
import 'cropperjs/dist/cropper.css';
import Error from './components/error';
import '../../assets/css/style.css';
import Router from './router';



const App = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'));
  const { data, error, loading, refetch } = useCurrentUserQuery();

	const handleLogin = (status) => {
        refetch().then(() => {
            setLoggedIn(status);
        }).catch(() => {
            setLoggedIn(status);
        });
    	}



	return (
        <div className="container">
            <Helmet>
                <title>Graphbook - Feed</title>
                <meta name="description" content="Newsfeed of all your friends on Graphbook" />
            </Helmet>

		<Router loggedIn={loggedIn} changeLoginState={handleLogin}/>

		</div>
    )
}

export default App
