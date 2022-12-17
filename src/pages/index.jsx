import React from 'react';
import { Routes, Route, Outlet } from 'react-router';
import Header from '../widgets/Header/Header';
import SignupPage from './Signup/Signup';
import Landing from './Landing/Landing';
import FilmsPage from './FilmsPage/FilmsPage';
import Page404 from './Page404/Page404';
import SigninPage from './Signin/SigninPage';
import Footer from '../shared/ui/Footer/Footer';
import SavedMoviesPage from './SavedMoviesPage/SavedMoviesPage';
import ProfilePage from './Profile/ProfilePage';

function RouterPages() {
  return (
    <Routes>
      <Route element={(
        <>
          <Header isLoggedIn />
          <Outlet />
          <Footer />
        </>
      )}
      >
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<FilmsPage />} />
        <Route path="/saved-movies" element={<SavedMoviesPage />} />
      </Route>
      <Route element={(
        <>
          <Header isLoggedIn />
          <Outlet />
        </>
      )}
      >
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default RouterPages;
