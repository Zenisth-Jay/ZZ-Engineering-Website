import { createContext, useContext, useState, ReactNode } from 'react';

interface Location {
  pathname: string;
  hash: string;
  search: string;
  state: any;
  key: string;
}

interface RouterContextType {
  location: Location;
  navigate: (path: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<Location>({
    pathname: '/',
    hash: '',
    search: '',
    state: null,
    key: 'default'
  });

  const [params, setParams] = useState<Record<string, string>>({});

  const navigate = (path: string) => {
    if (path === '/' || path.startsWith('/#')) {
      setLocation({
        pathname: '/',
        hash: path.includes('#') ? path.split('#')[1] : '',
        search: '',
        state: null,
        key: Math.random().toString()
      });
      setParams({});
      
      if (path.includes('#')) {
        const hash = path.split('#')[1];
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path.startsWith('/case-study/')) {
      const id = path.split('/')[2];
      setLocation({
        pathname: path,
        hash: '',
        search: '',
        state: null,
        key: Math.random().toString()
      });
      setParams({ id });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === '/engineering-services') {
      setLocation({
        pathname: path,
        hash: '',
        search: '',
        state: null,
        key: Math.random().toString()
      });
      setParams({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === '/scan-to-bim') {
      setLocation({
        pathname: path,
        hash: '',
        search: '',
        state: null,
        key: Math.random().toString()
      });
      setParams({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === '/construction-services') {
      setLocation({
        pathname: path,
        hash: '',
        search: '',
        state: null,
        key: Math.random().toString()
      });
      setParams({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ location, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useLocation must be used within RouterProvider');
  return context.location;
}

export function useNavigate() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useNavigate must be used within RouterProvider');
  return context.navigate;
}

export function useParams() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useParams must be used within RouterProvider');
  return context.params;
}

// Mock Link component
export function Link({ to, children, ...props }: { to: string; children: ReactNode; [key: string]: any }) {
  const navigate = useNavigate();
  return (
    <a
      {...props}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}