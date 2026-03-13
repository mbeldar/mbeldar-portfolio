import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/Pastel.css';
import App from './components/App';
import RootLanding from './components/RootLanding';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageLayout from './components/PageLayout';
import Nond from './components/Nond';
import Legal from './components/Legal';
import Support from './components/Support';
import Privacy from './components/Privacy';
import NondBlogStopWastingFood from './components/NondBlogStopWastingFood';
import NondBlogLazyGrocery from './components/NondBlogLazyGrocery';
import NondBlogWhyIBuilt from './components/NondBlogWhyIBuilt';
import NondBlogMealPrepBeginners from './components/NondBlogMealPrepBeginners';
import NondBlogHowToPlanMeals from './components/NondBlogHowToPlanMeals';
import NondBlogFreeMealPlanner from './components/NondBlogFreeMealPlanner';
import NondBlogGroceryList from './components/NondBlogGroceryList';
import NondBlogRecipeManager from './components/NondBlogRecipeManager';
import NondFaq from './components/NondFaq';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<RootLanding />} />
          <Route path="profile" element={<App />} />
          <Route path="nond" element={<Nond />} />
          <Route path="nond/support" element={<Support />} />
          <Route path="nond/legal" element={<Legal />} />
          <Route path="nond/blog/stop-wasting-food" element={<NondBlogStopWastingFood />} />
          <Route path="nond/blog/lazy-grocery-shopping" element={<NondBlogLazyGrocery />} />
          <Route path="nond/blog/why-i-built-my-own" element={<NondBlogWhyIBuilt />} />
          <Route path="nond/blog/meal-prep-beginners" element={<NondBlogMealPrepBeginners />} />
          <Route path="nond/blog/how-to-plan-meals-for-the-week" element={<NondBlogHowToPlanMeals />} />
          <Route path="nond/blog/free-meal-planner-iphone" element={<NondBlogFreeMealPlanner />} />
          <Route path="nond/blog/grocery-list-from-meal-plan" element={<NondBlogGroceryList />} />
          <Route path="nond/blog/recipe-manager-ios" element={<NondBlogRecipeManager />} />
          <Route path="nond/faq" element={<NondFaq />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
