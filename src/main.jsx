import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { Shopping } from './components/shopping/shopping.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { LogoAnimation } from './components/logo-animation/logo-animation.jsx'
import { MouseMove } from './components/mouse-move/mouse-move.jsx'
import { KeyDemo } from './components/key-demo/key-demo.jsx'
import { ButtonDemo } from './components/button-demo/button-demo.jsx'
import { EMICalculator } from './components/emi-calculator/emi-calculator.jsx'
import { DebounceDemo } from './components/debounce-demo/debounce-demo.jsx'
import { IntervalDemo } from './components/interval-demo/interval-demo.jsx'
import { StopWatch } from './components/stop-watch/stop-watch.jsx'
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
import { FormDemo } from './components/form-demo/form-demo.jsx'
import { FormikDemo } from './components/formik-demo/fromik-demo.jsx'
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx'
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo.jsx'
import { ControlDemo } from './components/control-demo/control-demo.jsx'
import { ContextDemo } from './components/context-demo/context-demo.jsx'
import { FakestoreIndex } from './fakestore/fakestore-index.jsx'
import { WeatherIndex } from './components/weather/weather-index.jsx'
import { TutorialIndex } from './tutorials/tutorial-index.jsx'
import { ShoppingIndex } from './shopping/shopping-index.jsx'
import { CookiesProvider } from 'react-cookie'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </StrictMode>,
)
