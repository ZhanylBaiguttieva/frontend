'use client';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import AppToolBar from '@/components/UI/AppToolBar/AppToolBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline/>
          <html lang="en">
          <body>
            <header>
              <AppToolBar/>
            </header>
            <main>
              <Container maxWidth="xl">
                {children}
              </Container>
            </main>
          </body>
          </html>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
