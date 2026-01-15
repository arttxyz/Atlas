import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TeamDetail from "./pages/TeamDetail";
import PlayerDetail from "./pages/PlayerDetail";
import EmeaDetail from "./pages/EmeaDetail";
import ApacDetail from "./pages/ApacDetail";
import ChinaDetail from "./pages/ChinaDetail";


function Router() {
  return (
    <Switch>
  <Route path="/region/china" component={ChinaDetail} />
  <Route path="/region/apac" component={ApacDetail} />
  <Route path="/region/emea" component={EmeaDetail} />
  <Route path="/player/:id" component={PlayerDetail} />
  <Route path="/team/:id" component={TeamDetail} />
  <Route path="/" component={Home} />
  <Route path="/region/:region" component={Home} />
  <Route component={NotFound} />
</Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
